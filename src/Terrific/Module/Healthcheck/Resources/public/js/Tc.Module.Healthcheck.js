(function($) {
    /**
     * Healthcheck module implementation.
     *
     * @author Terrific Composer
     * @namespace Tc.Module
     * @class Healthcheck
     * @extends Tc.Module
     */
    Tc.Module.Healthcheck = Tc.Module.extend({
		
		/**
		 * Initializes the Healthcheck module.
		 * 
		 * @method init
		 * @return {void}
	 	 * @constructor
	     * @param {jQuery} $ctx the jquery context
	     * @param {Sandbox} sandbox the sandbox to get the resources from
	     * @param {String} modId the unique module id
		 */
		init: function($ctx, sandbox, modId) {
	      	// call base constructor
	        this._super($ctx, sandbox, modId);
	    },
    
        /**
         * Hook function to load the module specific dependencies.
         *
         * @method dependencies
         * @return void
         */
        dependencies: function() {
            this.require('jquery.qtip.min.js', 'plugin', 'onBinding');
        },

        /**
         * Hook function to bind the module specific events.
         *
         * @method onBinding
         * @return void
         */
        onBinding: function() {
            var $ctx = this.$ctx,
                that = this;

            // create tooltip
            var $tooltip = $('<div class="tooltipWindow"><span class="button delete iconOnly closeTooltip"><span class="icon close"></span></span><div class="mod modLoader">&nbsp;</div><div class="tooltipContent"></div></div>');
            $('body').append($tooltip);
            that.sandbox.addModules($tooltip);

            $('<div />').qtip({
                content: {
                    text: ' '
                },
                position: {
                    target: 'event',
                    at: 'left center',
                    my: 'right center',
                    viewport: $(window),
                    adjust: {
                        method: 'flip',
                        x: -20
                    },
                    effect: false
                },
                show: {
                    event: 'click',
                    target: $('.icon[href]', $ctx)
                },
                hide: {
                    event: 'click',
                    target: $('.closeTooltip', $tooltip)
                },
                events: {
                    show: function(event, api) {
                        // update the content of the tooltip on each show
                        var $target = $($(event.originalEvent.target).attr('href'));

                        // remove old data
                        if($tooltip.data('source')) {
                            // hide existing div
                            $tooltip.data('source').append($tooltip.find('.tooltipContent').children());
                            $tooltip.removeData().hide().appendTo('body');
                        }

                        if($target.length) {
                            $tooltip.data('source', $target.parent());
                            $tooltip.find('.tooltipContent').append($target);

                            api.set('content.text', $tooltip);
                        }
                    },

                    hide: function(event, api) {
                        // existing div
                        $tooltip.data('source').append($tooltip.find('.tooltipContent').children());
                        $tooltip.removeData().hide().appendTo('body');
                    }
                },
                style: {
                    tip: {
                        border: 1,
                        width: 12,
                        height: 15
                    }
                }
            });
        }
    });
})(Tc.$);
