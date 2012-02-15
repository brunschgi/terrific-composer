/**
 * Contains utility functions for blocking / unblocking elements.
 *
 * @author Remo Brunschwiler
 * @namespace Nx.Utils
 * @class Block
 * @static
 */
(function($) {
    Tc.Utils.Block = {
        /**
         * Blocks the given element.
         *
         * @method block
         * @param {jQuery} $elem the element to block
         */
        block: function($elem) {
            $elem.block({
                message: '<span class="loader">&nbsp;</span>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    padding: '10px',
                    width: '31px',
                    height: '31px',
                    border: '0',
                    cursor: 'wait',
                    background: 'transparent'
                }
            });
        },
        
        /**
         * Unblocks the given element.
         *
         * @method unblock
         * @param {jQuery} $elem the element to unblock
         */
        unblock: function($elem) {
            $elem.unblock();
        }
    };
})(Tc.$);
