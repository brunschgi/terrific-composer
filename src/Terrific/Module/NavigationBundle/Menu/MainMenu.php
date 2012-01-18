<?php
namespace Terrific\Module\NavigationBundle\Menu;

use Knp\Menu\MenuItem;
use Knp\Menu\MenuFactory;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Router;

class MainMenu extends MenuItem
{
    public function __construct(Request $request, Router $router)
    {
        parent::__construct('Main', new MenuFactory());

        $this->setCurrentUri($request->getRequestUri());

        $this->addChild('Concept', array('uri' => $router->generate('home')));
        $this->addChild('Core', array('uri' => $request->getBaseUrl().'/core'));
        $this->addChild('Composer', array('uri' => $request->getBaseUrl().'/composer'));
        $this->addChild('Integrations', array('uri' => $request->getBaseUrl().'/#integrations'));
        $this->addChild('Blog', array('uri' => $request->getBaseUrl().'/blog'));
        $this->addChild('Showcases', array('uri' => $request->getBaseUrl().'/showcases'));
        $this->addChild('About', array('uri' => $request->getBaseUrl().'/about'));
    }
}