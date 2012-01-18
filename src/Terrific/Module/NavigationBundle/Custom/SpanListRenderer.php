<?php
namespace Terrific\Module\NavigationBundle\Custom;

use \Knp\Menu\Renderer\ListRenderer;
use \Knp\Menu\ItemInterface;

class SpanListRenderer extends ListRenderer
{
    /**
     * Renders the link in a a tag with span and link attributes or
     * the label in a span tag with label attributes
     *
     * Tests if item has a an uri and if not tests if it's
     * the current item and if the text has to be rendered
     * as a link or not.
     *
     * @param \Knp\Menu\ItemInterface $item The item to render the link or label for
     * @param array $options The options to render the item
     * @return string
     */
    public function renderLink(ItemInterface $item, array $options = array())
    {
        $options = array_merge($this->getDefaultOptions(), $options);

        if ($item->getUri() && (!$item->isCurrent() || $options['currentAsLink'])) {
            $text = sprintf('<a href="%s"%s><span>%s</span></a>', $this->escape($item->getUri()), $this->renderHtmlAttributes($item->getLinkAttributes()), $this->escape($item->getLabel()));
        } else {
            $text = sprintf('<span%s>%s</span>', $this->renderHtmlAttributes($item->getLabelAttributes()), $this->escape($item->getLabel()));
        }

        return $this->format($text, 'link', $item->getLevel());
    }
}