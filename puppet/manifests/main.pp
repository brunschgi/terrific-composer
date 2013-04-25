class apt_update {

 file { "dotdeb.list":
        path => "/etc/apt/sources.list.d/dotdeb.list",
        ensure => file,
        owner => "root",
        group => "root",
        content => "deb http://ftp.ch.debian.org/debian squeeze contrib non-free\ndeb http://packages.dotdeb.org squeeze all\ndeb-src http://packages.dotdeb.org squeeze all\ndeb http://packages.dotdeb.org squeeze-php54 all\ndeb-src http://packages.dotdeb.org squeeze-php54 all",

        notify => Exec["aptGetUpdate"],
    }


    exec { "aptGetUpdate":
        command => "wget -q -O - http://www.dotdeb.org/dotdeb.gpg | sudo apt-key add - && sudo apt-get update",
        path => ["/bin", "/usr/bin"]
    }
}

class apache {
    package { "apache2-mpm-worker":
        ensure => present,
        require => Exec["aptGetUpdate"]
    }

   package { "libapache2-mod-fastcgi":
        ensure => present,
        require => Package["apache2-mpm-worker"]
    }

    service { "apache2":
        ensure => running,
        require => Package["apache2-mpm-worker"],
        subscribe => File["main-vhost.conf", "httpd.conf", "mod_rewrite", "mod_actions", "mod_expires", "mod_fastcgi"]
    }

    file { "main-vhost.conf":
        path => '/etc/apache2/conf.d/main-vhost.conf',
        ensure => file,
        content => template('default/main-vhost.conf'),
        require => Package["apache2-mpm-worker"]
    }

    file { "httpd.conf":
        path => "/etc/apache2/httpd.conf",
        ensure => file,
        content => template('default/httpd.conf'),
        require => Package["apache2-mpm-worker"]
    }

    file { "mod_rewrite":
        path => "/etc/apache2/mods-enabled/rewrite.load",
        ensure => "link",
        target => "/etc/apache2/mods-available/rewrite.load",
        require => Package["apache2-mpm-worker"]
    }

    file { "mod_actions":
        path => "/etc/apache2/mods-enabled/actions.load",
        ensure => "link",
        target => "/etc/apache2/mods-available/actions.load",
        require => Package["libapache2-mod-fastcgi"]
    }

    file { "mod_actions_conf":
        path => "/etc/apache2/mods-enabled/actions.conf",
        ensure => "link",
        target => "/etc/apache2/mods-available/actions.conf",
        require => Package["libapache2-mod-fastcgi"]
    }


      file { "mod_fastcgi":
        path => "/etc/apache2/mods-enabled/fastcgi.load",
        ensure => "link",
        target => "/etc/apache2/mods-available/fastcgi.load",
        require => Package["libapache2-mod-fastcgi"]
    }

    file { "mod_fastcgi_conf":
        path => "/etc/apache2/mods-enabled/fastcgi.conf",
        ensure => "link",
        target => "/etc/apache2/mods-available/fastcgi.conf",
        require => Package["libapache2-mod-fastcgi"]
    }
     file { "mod_expires":
        path => "/etc/apache2/mods-enabled/expires.load",
        ensure => "link",
        target => "/etc/apache2/mods-available/expires.load",
        require => Package["apache2-mpm-worker"]
    }
}

class php53 {
    package { "php5-fpm":
        ensure => present,
        require => Package["apache2-mpm-worker"]
    }

     package { "php5-cli":
        ensure => present,
        require => Package["php5-fpm"]
    }

    file { "php-fpm.conf":
        path => "/etc/php5/fpm/php-fpm.conf",
        ensure => file,
        content => template('default/php-fpm.conf'),
        require => Package["php5-fpm"]
    }




}

class terrific {

    exec { "vendorsInstall":
        cwd => "/vagrant",
        command => "php bin/vendors install",
        path => ["/bin", "/usr/bin"],
        creates => "/vagrant/vendors",
        require => Package["php5-cli", "git"]
    }

}

class groups {
    group { "puppet":
        ensure => present,
    }
}

class git {
     package { "git":
        ensure => present,
        require => Package["git"]
    }
}

include apt_update
include git
include apache
include php53
include groups
include terrific
