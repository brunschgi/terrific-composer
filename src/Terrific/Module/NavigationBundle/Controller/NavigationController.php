<?php

namespace Terrific\Module\NavigationBundle\Controller;

use Terrific\Module\NavigationBundle\Custom\SpanListRenderer;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Router;


class NavigationController extends Controller
{
    /**
     * Gets back the main navigation
     *
     * @Template()
     */
    public function mainAction(Request $request)
    {
        $menu = new \Terrific\Module\NavigationBundle\Menu\MainMenu($request, $this->get('router'));

        $renderer = new SpanListRenderer();
        return array('menu' => $renderer->render($menu));
    }
}