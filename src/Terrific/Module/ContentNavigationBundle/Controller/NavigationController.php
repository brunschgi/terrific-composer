<?php

namespace Terrific\Module\ContentNavigationBundle\Controller;

use Knp\Menu\Renderer\ListRenderer;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Router;


class NavigationController extends Controller
{
    /**
     * Gets back the content navigation for the homepage
     *
     * @Template()
     */
    public function homeAction(Request $request)
    {
        $menu = new \Terrific\Module\ContentNavigationBundle\Menu\HomeMenu($request, $this->get('router'));

        $renderer = new ListRenderer();
        return array('menu' => $renderer->render($menu));
    }
}