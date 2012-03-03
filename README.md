Terrific Composer
=================

Welcome to the Terrific Composer - a Frontend Development Framework specifically
designed for building top-notch frontends based on the [Terrific concept](http://www.terrifically.org/).

This document contains information on how to download and start using Terrific Composer.
Terrific Composer is built on top of Symfony2. If you have any troubles during installing, please see
the official Symfony [Installation chapter](http://symfony.com/doc/current/book/installation.html)
for a more detailed explanation.

1) Download the Terrific Composer
---------------------------------

If you've already downloaded the Composer, and unpacked it somewhere
within your web root directory, then move on to the "Installation" section.

To download the Terrific Composer, you have two options:

### Download an archive file (*recommended*)

The easiest way to get started is to download an archive of the Terrific Composer
(http://www.terrifically.org/composer/). Unpack it somewhere under your web server root
directory and you're done. The web root is wherever your web server (e.g. Apache)
looks when you access `http://localhost` in a browser.

### Clone the git Repository

I highly recommend that you download the archive file version of Terrific Composer.
But if you still want to use git, you are on your own.

Run the following commands:

    git clone http://github.com/brunschgi/terrific-composer.git
    cd terrific-composer
    rm -rf .git

2) Installation
---------------

Once you've downloaded the Terrific Composer, installation is easy, and basically
involves making sure your system is ready for Symfony2.

### a) Check your System Configuration

Before you begin, make sure that your local system is properly configured
for Symfony. To do this, execute the following:

    php app/check.php

Make sure you pass the "Mandatory requirements" section. If you get any warnings or
recommendations there, fix these now before moving on.
if you want you can skip the warnings or recommendations in the "Optional checks" section.

### b) Install the Vendor Libraries

If you installed the Terrific Composer via git, then you need to download all of the necessary
vendor libraries. If you're not sure if you need to do this, check to see if you have a ``vendor/`` directory.
If you don't, or if that directory is empty, run the following:

    php bin/vendors install

Note that you **must** have git installed and be able to execute the `git`
command to execute this script. If you don't have git available, either install
it or download the archive of Terrific Composer from (http://www.terrifically.org/composer/).

### c) Access the Application via the Browser

Congratulations! You're now ready to use Terrific Composer. If you've unzipped Terrific Composer
in the web root of your computer, then you should be able to access the welcome page via:

    http://localhost/terrific-composer/web/


3) Learn about Terrific Composer!
---------------------------------

The Terrific Composer is meant to be the starting point for building your Frontends,
but it also contains some sample code that you can learn from and play with.

If you have problems or want to know more about the underlying Symfony2, a great way to start learning
is via the [Symfony2 Quick Tour](http://symfony.com/doc/current/quick_tour/the_big_picture.html),
which will take you through all the basic features of Symfony2

Once you're feeling good, you can move onto reading the official
[Symfony2 book](http://symfony.com/doc/current/).

The Terrific Composer documentation is coming soon…

Enjoy!
