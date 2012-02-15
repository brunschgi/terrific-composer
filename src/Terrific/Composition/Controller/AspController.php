<?php

namespace Terrific\Composition\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Terrific\ComposerBundle\Annotation\Composer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class AspController extends Controller
{
    /**
     * @Composer("ASP Welcome Screen")
     * @Route("/asp/", name="asp_welcome")
     * @Template()
     */
    public function welcomeAction()
    {
        return array();
    }

    /**
     * @Composer("ASP Portfolio")
     * @Route("/asp/portfolio", name="asp_portfolio")
     * @Template()
     */
    public function portfolioAction()
    {
        return array();
    }

    /**
     * @Composer("ASP Create Proposal")
     * @Route("/asp/proposal", name="asp_proposal")
     * @Template()
     */
    public function proposalAction()
    {
        return array();
    }

    /**
     * @Composer("ASP Transcaction Preview")
     * @Route("/asp/transaction", name="asp_transaction")
     * @Template()
     */
    public function transactionAction()
    {
        return array();
    }

    /**
     * @Composer("ASP Print")
     * @Route("/asp/print", name="asp_print")
     * @Template()
     */
    public function printAction()
    {
        return array();
    }

    /**
     * @Composer("ASP Save & Exit")
     * @Route("/asp/save", name="asp_save")
     * @Template()
     */
    public function saveAction()
    {
        return array();
    }

    /**
     * @Composer("ASP Archive")
     * @Route("/asp/archive", name="asp_archive")
     * @Template()
     */
    public function archiveAction()
    {
        return array();
    }
}
