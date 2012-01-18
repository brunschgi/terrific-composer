(function ($) {
    /**
     * Toc module implementation.
     *
     * @author Your Name
     * @namespace Tc.Module
     * @class Toc
     * @extends Tc.Module
     */
    Tc.Module.Toc = Tc.Module.extend({

        /**
         * Initializes the Toc module.
         *
         * @method init
         * @return {void}
         * @constructor
         * @param {jQuery} $ctx the jquery context
         * @param {Sandbox} sandbox the sandbox to get the resources from
         * @param {String} modId the unique module id
         */
        init:function ($ctx, sandbox, modId) {
            // call base constructor
            this._super($ctx, sandbox, modId);
        },

        /**
         * Hook function to bind the module specific events.
         *
         * @method onBinding
         * @return void
         */
        onBinding:function () {
            var $ctx = this.$ctx;

            // scroll to the appropriate position
            $('a', $ctx).on('click', function () {
                var pos = $('#' + $(this).attr('href').substring(1)).offset().top;

                $('html:not(:animated), body:not(:animated)').animate({
                    scrollTop:pos
                }, 500);

                return false;
            });

            // fix the navigation
            var $nav = $ctx;
            var top = $nav.offset().top;
            $(window).scroll(function() {
                // what the y position of the scroll is
                var y = $(this).scrollTop();

                // whether that's below the form
                if (y >= top) {
                    // if so, ad the fixed class
                    $nav.addClass('fixed');
                } else {
                    // otherwise remove it
                    $nav.removeClass('fixed');
                }
            });
        }
    });
})(Tc.$);
