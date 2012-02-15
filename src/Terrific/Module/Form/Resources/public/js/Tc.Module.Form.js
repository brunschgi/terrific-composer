(function($) {
    /**
     * Form module implementation.
     *
     * @author Terrific Composer
     * @namespace Tc.Module
     * @class Form
     * @extends Tc.Module
     */
    Tc.Module.Form = Tc.Module.extend({
		
		/**
		 * Initializes the Form module.
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
            this.require('jquery.checkbox.js', 'plugin', 'onBinding')
        },
        
        /**
         * Hook function to bind the module specific events.
         *
         * @method onBinding
         * @return void
         */
        onBinding: function() {
            var $ctx = this.$ctx;

            // single checkboxes
            $('input[type=checkbox]', $ctx).checkbox();
        }
    });
})(Tc.$);
