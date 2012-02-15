(function($) {
    /**
     * TitleBar module implementation.
     *
     * @author Remo Brunschwiler
     * @namespace Tc.Module
     * @class TitleBar
     * @extends Tc.Module
     */
    Tc.Module.TitleBar = Tc.Module.extend({
		
		/**
		 * Initializes the TitleBar module.
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
        },
        
        /**
         * Hook function to do module specific stuff before binding the events (i.e. fetching some data).
         *
         * @method beforeBinding
         * @param {Function} callback the callback function which must be called at the end
         * @return void
         */
        beforeBinding: function(callback) {
            callback();
        },
        
        /**
         * Hook function to bind the module specific events.
         *
         * @method onBinding
         * @return void
         */
        onBinding: function(e) {
            var $ctx = this.$ctx,
                $dropdown = $('.dropdown', $ctx);

            $dropdown.on('click', function(e, forceClose) {
                var $this = $(this),
                    $li = $this.closest('li'),
                    $overlay = $li.find('.overlay');

                forceClose = forceClose || false;

                if($overlay.length > 0 && !forceClose) {
                    // open and position the overlay outside of the li (overflow hidden is necessary)
                    var position = $li.position();
                    $li.data('overlay', $overlay);
                    $overlay.css({ 'top' : position.top, 'left' : position.left }).appendTo($ctx).show();
                    $this.addClass('active');
                }
                else if($overlay.length < 1) {
                    // close the overlay
                    $overlay = $li.data('overlay') || [];
                    if($overlay.length > 0) {
                        $overlay.hide().appendTo($li);
                        $this.removeClass('active');
                    }
                }

                return false;
            });

            $('body').on('click.tabs', function() {
                $('.dropdown', $ctx).trigger('click', [true]);
            });
        },

        /**
         * Hook function to do module specific stuff after binding the events (i.e. triggering some events).
         *
         * @method afterBinding
         * @return void
         */
        afterBinding: function() {
        
        }
        
    });
})(Tc.$);
