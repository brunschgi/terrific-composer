<?php

namespace Terrific\Composition\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Terrific\ComposerBundle\Annotation\Composer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class StyleguideController extends Controller
{
    /**
     * @Composer("Styleguide Buttons")
     * @Route("/styleguide/buttons", name="styleguide_buttons")
     * @Template()
     */
    public function buttonsAction()
    {
        return array();
    }
}
