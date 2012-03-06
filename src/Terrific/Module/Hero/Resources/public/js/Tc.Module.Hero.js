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
            // nothing to do here -> please delete unused hooks in real world examples due to performance reasons
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

            // extract the name and provide the default greeting
            $('.message', $ctx).val('Hi, I am ' + $('pre', $ctx).data('name'));
            callback();
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

            // bind the submit event on the form
            $('form', $ctx).bind('submit', function() {
                var name = $('pre', $ctx).data('name'),
                    message = $('.message', $ctx).val();

                // write the current message in the bubble and notify the others
                that.fire('message', { name : name, message : message}, function() {
                    $('.bubble', $ctx).text(message);
                });

                return false;
            })
        },
        
        /**
         * Hook function to do module specific stuff after binding the events (i.e. triggering some events).
         *
         * @method afterBinding
         * @return void
         */
        afterBinding: function() {
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
