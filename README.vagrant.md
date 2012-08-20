# blog.liip.ch

## get code ##

    git clone gitosis@git.liip.ch:liip/blog.liip.ch.git

make sure you're on the "neu" branch

    git co -b neu origin/neu

## Get Vagrant, if you don't have already

https://wiki.liip.ch/display/TECH/Vagrant

## startup vagrant

    vagrant up


## install config file and db

    cp conf/config.xml-dist conf/config.xml
    vagrant ssh -c "cd /vagrant/div/db && mysql -u blog_liip_ch -pue8hum6I blog_liip_ch < www_bitflux_ch.sql"
    rm -rf tmp/*

## watch site

go to http://192.168.11.11/ and be happy (hopefully, maybe reload it twice, if it doesn't work the first time)

# Troubleshooting

* Always delete the contents of tmp/ first, to see if that helps ;)
* uncomment the verbose error code in ./inc/popoon/xsl/error2html.xsl to see a better error message
