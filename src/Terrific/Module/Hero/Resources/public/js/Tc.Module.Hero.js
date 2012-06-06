(function($) {
    /**
     * Hero module implementation.
     *
     * @author Terrific Composer
     * @namespace Tc.Module
     * @class Hero
     * @extends Tc.Module
     */
    Tc.Module.Hero = Tc.Module.extend({
		
		/**
		 * Initializes the Hero module.
		 * 
		 * @method init
		 * @return {void}
	 	 * @constructor
	     * @param {jQuery} $ctx the jquery context
	     * @param {Sandbox} sandbox the sandbox to get the resources from
	     * @param {Number} id the unique module id
		 */
		init: function($ctx, sandbox, id) {
	      	// call base constructor
	        this._super($ctx, sandbox, id);
	    },

        /**
         * Hook function to do all of your module stuff.
         *
         * @method on
         * @param {Function} callback function
         * @return void
         */
        on: function(callback) {
            var $ctx = this.$ctx,
                that = this;

            // extract the name and provide the default greeting
            $('.message', $ctx).val('Hi, I am ' + $('pre', $ctx).data('name'));

            // bind the submit event on the form
            $('form', $ctx).bind('submit', function() {
                var name = $('pre', $ctx).data('name'),
                    message = $('.message', $ctx).val();

                // write the current message in the bubble and notify the others
                that.fire('message', { name : name, message : message}, function() {
                    $('.bubble', $ctx).text(message);
                });

                return false;
            });

            callback();
        },

        /**
         * Hook function to trigger your events.
         *
         * @method after
         * @return void
         */
        after: function() {
            var $ctx = this.$ctx;

            // trigger the first submit to write the default message in the bubble
            $('form', $ctx).trigger('submit');
        },


        /**
         * Handles the incoming messages from the other superheroes
         */
        onMessage: function(data) {
            var $ctx = this.$ctx;

            data = data || {};

            if(data.name && data.message) {
                $('.bubble', $ctx).text(data.name + ' said: ' + data.message);
            }
        }
        
    });
})(Tc.$);
