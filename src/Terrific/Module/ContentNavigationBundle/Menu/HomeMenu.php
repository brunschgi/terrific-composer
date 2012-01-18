<?php
namespace Terrific\Module\ContentNavigationBundle\Menu;

use Knp\Menu\MenuItem;
use Knp\Menu\MenuFactory;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Router;

class HomeMenu extends MenuItem
{
    public function __construct(Request $request, Router $router)
    {
        parent::__construct('Main', new MenuFactory());

        $this->setCurrentUri($request->getRequestUri());

        $this->addChild('Concept', array('uri' => '#concept'));
        $this->addChild('Composer', array('uri' => '#composer'));
        $this->addChild('Integrations', array('uri' => '#integrations'));
    }
}