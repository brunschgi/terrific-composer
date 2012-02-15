<?php
namespace Terrific\Module\LocalNavigation\Menu;

use Knp\Menu\MenuItem;
use Knp\Menu\MenuFactory;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Router;

class AspMenu extends MenuItem
{
    public function __construct(Request $request, Router $router)
    {
        /*
         * Possible Class Attributes: inactive, current
         * Additional Link Attributes: missing (for missing value -> renders <mark class="missing">&nbsp;</mark>), process (for arrow down)
         */

        parent::__construct('Main', new MenuFactory());

        $this->setCurrentUri($request->getRequestUri());
        $this->setAttribute('class', 'small');

        $this->addChild('portfolio', array('uri' => $router->generate('asp_portfolio'), 'label' => 'Portfolio'));
        $this['portfolio']->setLinkAttribute('class', 'icon portfolio')->setLinkAttribute('process', true);

        $this->addChild('proposal', array('uri' => $router->generate('asp_proposal'), 'label' => 'Anlagevorschlag erstellen'));
        $this['proposal']->setAttribute('class', 'process')->setLinkAttribute('class', 'icon proposal')->setLinkAttribute('process', true);

        $this->addChild('transaction', array('uri' => $router->generate('asp_transaction'), 'label' => 'Transaktionsvorschau'));
        $this['transaction']->setAttribute('class', 'process')->setLinkAttribute('missing', true)->setLinkAttribute('class', 'icon transaction')->setLinkAttribute('process', true);

        $this->addChild('print', array('uri' => $router->generate('asp_print'), 'label' => 'Vorschlag/Analyse drucken'));
        $this['print']->setAttribute('class', 'process inactive')->setLinkAttribute('class', 'icon print')->setLinkAttribute('process', true);;

        $this->addChild('save', array('uri' => $router->generate('asp_save'), 'label' => 'Speichern und Beenden'));
        $this['save']->setAttribute('class', 'process last')->setLinkAttribute('class', 'icon save');

        $this->addChild('archive', array('uri' => $router->generate('asp_archive'), 'label' => 'Archiv öffnen'));
        $this['archive']->setAttribute('class', 'separated')->setLinkAttribute('class', 'icon archive');
    }
}