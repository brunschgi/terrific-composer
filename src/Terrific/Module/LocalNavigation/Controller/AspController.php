<?php

namespace Terrific\Module\LocalNavigation\Controller;

use Terrific\Module\LocalNavigation\Custom\ListSpanRenderer;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Router;
use Terrific\Module\LocalNavigation\Menu\AspMenu;


class AspController extends Controller
{
    /**
     * Gets back the ASP local navigation
     *
     * @Template()
     */
    public function localAction(Request $request)
    {
        $menu = new AspMenu($request, $this->get('router'));

        $renderer = new ListSpanRenderer();
        return array('menu' => $renderer->render($menu));
    }
}