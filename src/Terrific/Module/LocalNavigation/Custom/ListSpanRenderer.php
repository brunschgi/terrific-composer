<?php
namespace Terrific\Module\LocalNavigation\Custom;

use \Knp\Menu\Renderer\ListRenderer;
use \Knp\Menu\ItemInterface;

class ListSpanRenderer extends ListRenderer
{
    /**
     * <li><a class="icon {icon}"> href="{uri}"><span>{name}</span></a></li>
     *
     * @param \Knp\Menu\ItemInterface $item The item to render the link or label for
     * @param array $options The options to render the item
     * @return string
     */
    public function renderLink(ItemInterface $item, array $options = array())
    {
        $options = array_merge($this->getDefaultOptions(), $options);

        if ($item->getUri() && (!$item->isCurrent() || $options['currentAsLink'])) {
            $process = '';
            if($item->getLinkAttribute('process')) {
                $process = '<span class="arrow">&nbsp;</span>';
                $item->setLinkAttribute('process', null);
            }
            $missing = '';
            if($item->getLinkAttribute('missing')) {
                $missing = '<span class="missing">&nbsp;</span>';
                $item->setLinkAttribute('missing', null);
            }
            $text = sprintf('<a href="%s"%s>%s<span class="desc">%s</span>&nbsp;%s</a>', $this->escape($item->getUri()), $this->renderHtmlAttributes($item->getLinkAttributes()), $missing, $this->escape($item->getLabel()), $process);
        }

        return $this->format($text, 'link', $item->getLevel());
    }
}