<?php

namespace Terrific\CompositionBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class CoreDocsController extends Controller
{
    /**
     * @Route("/core/docs", name="core_docs")
     * @Template()
     */
    public function indexAction()
    {
        return array();
    }

    /**
     * @Route("/core/docs/basics", name="core_docs_basics")
     * @Template()
     */
    public function basicsAction()
    {
        return array();
    }

    /**
     * @Route("/core/docs/application", name="core_docs_application")
     * @Template()
     */
    public function applicationAction()
    {
        return array();
    }

    /**
     * @Route("/core/docs/module", name="core_docs_module")
     * @Template()
     */
    public function moduleAction()
    {
        return array();
    }

    /**
     * @Route("/core/docs/skin", name="core_docs_skin")
     * @Template()
     */
    public function skinAction()
    {
        return array();
    }

    /**
     * @Route("/core/docs/sandbox", name="core_docs_sandbox")
     * @Template()
     */
    public function sandboxAction()
    {
        return array();
    }

    /**
     * @Route("/core/docs/connector", name="core_docs_connector")
     * @Template()
     */
    public function connectorAction()
    {
        return array();
    }
}
