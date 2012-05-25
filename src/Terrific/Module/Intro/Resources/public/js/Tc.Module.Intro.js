(function($) {
    /**
     * Intro module implementation.
     *
     * @author Terrific Composer
     * @namespace Tc.Module
     * @class Intro
     * @extends Tc.Module
     */
    Tc.Module.Intro = Tc.Module.extend({
		
		/**
		 * Initializes the Intro module.
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
         * Hook function to do all of your module stuff.
         *
         * @method on
         * @return void
         */
        on: function() {

        },

        /**
         * Hook function to trigger your events.
         *
         * @method after
         * @return void
         */
        after: function() {

        }
    });
})(Tc.$);
