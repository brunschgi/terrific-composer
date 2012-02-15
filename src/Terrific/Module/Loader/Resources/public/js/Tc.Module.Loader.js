(function($) {
    /**
     * Loader module implementation.
     *
     * @author Terrific Composer
     * @namespace Tc.Module
     * @class Loader
     * @extends Tc.Module
     */
    Tc.Module.Loader = Tc.Module.extend({
		
		/**
		 * Initializes the Loader module.
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
         * Hook function to bind the module specific events.
         *
         * @method onBinding
         * @return void
         */
        onBinding: function() {
            var $ctx = this.$ctx,
                $messages = $('.messages', $ctx);

            $ctx.on('next', function() {
                var $current = $('li:visible', $messages),
                    $next = $current.next('li');

                // hide current message and display the next message (if there is one)
                if($next.length > 0) {
                    $current.hide();
                    $next.show();
                }

                return false;
            });
        },

        onNext: function() {
            this.$ctx.trigger('next');
        }
    });
})(Tc.$);
