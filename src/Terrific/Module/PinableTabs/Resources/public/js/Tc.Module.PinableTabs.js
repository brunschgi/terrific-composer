(function($) {
    /**
     * PinableTabs module implementation.
     *
     * @author Remo Brunschwiler
     * @namespace Tc.Module
     * @class PinableTabs
     * @extends Tc.Module
     */
    Tc.Module.PinableTabs = Tc.Module.extend({
		
		/**
		 * Initializes the PinableTabs module.
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
            var $ctx = this.$ctx;
            // hide the tab content accordingly to the tab navigation
            $('li', $ctx).each(function() {
                var $this = $(this);
                if(!$this.hasClass('inv')) {
                    var $target = $($this.find('a').attr('href'));

                    if($target.length > 0) {
                        $target.hide();
                    }
                }
            });

            callback();
        },
        
        /**
         * Hook function to bind the module specific events.
         *
         * @method onBinding
         * @return void
         */
        onBinding: function() {
            var $ctx = this.$ctx;

            // tab functionality
            $('li', $ctx).on('click', function(e) {
                var $this = $(this),
                    $target = $($this.find('a').attr('href'));

                if($target.length > 0) {
                    $target.show();
                    $this.addClass('inv');
                }

                e.preventDefault();
            });

            // pin the PinableTabs back to the top
            $('.pin').on('click', function(e) {
                var $this = $(this),
                    $target = $this.closest('.modPanel'),
                    $tab = $('a[href=#' + $target.attr('id') + ']', $ctx).closest('li');

                if($target.length > 0 && $tab.length > 0) {
                    $target.hide();
                    $tab.removeClass('inv');
                }

                e.preventDefault();
            });
        }
    });
})(Tc.$);
