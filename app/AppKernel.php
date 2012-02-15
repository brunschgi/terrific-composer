<?php

use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\Finder\Finder;

class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\MonologBundle\MonologBundle(),
            new Symfony\Bundle\AsseticBundle\AsseticBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
            new Terrific\CoreBundle\TerrificCoreBundle(),
            new Terrific\ComposerBundle\TerrificComposerBundle(),

            // project
            new Terrific\Composition\TerrificComposition()
        );

        // register all terrific modules
        $dir = __DIR__.'/../src/Terrific/Module/';

        $finder = new Finder();
        $finder->directories()->in($dir)->depth('== 0');

        foreach ($finder as $file) {
            $filename = $file->getFilename();
            $module = 'Terrific\Module\\'.$filename.'\TerrificModule'.$filename;
            $bundles[] = new $module();
        }

        if (in_array($this->getEnvironment(), array('dev'))) {
            // here comes your dev only dependencies
        }

        return $bundles;
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__ . '/config/config_' . $this->getEnvironment() . '.yml');
    }
}
