(function ($) {
    /**
     * LocalNavigation module implementation.
     *
     * @author Your Name
     * @namespace Tc.Module
     * @class LocalNavigation
     * @extends Tc.Module
     */
    Tc.Module.LocalNavigation = Tc.Module.extend({

        /**
         * Initializes the LocalNavigation module.
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
            var $ctx = this.$ctx,
                $nav = $('ul', $ctx),
                $title = $('h2', $ctx),
                state = false,
                that = this;


            $('.toggle', $ctx).on('click', function () {
                var $this = $(this),
                    fullwidth = $nav.width(),
                    iconwidth = 100;


                if ($this.hasClass('max')) {
                    $title.addClass('min');
                    $nav.animate({ 'left':-fullwidth }, 200, function () {
                        $nav.addClass('min').show().animate({ 'left':'0' }, 200, function () {
                            $this.removeClass('max').addClass('min');
                            that.fire('sizeChange');
                        });
                    });
                }
                else {
                    $title.removeClass('min');
                    $nav.show().animate({ 'left':-iconwidth }, 200, function () {
                        $nav.removeClass('min').show().animate({ 'left':'0' }, 200, function () {
                            $this.removeClass('min').addClass('max');
                            that.fire('sizeChange');
                        });
                    });
                }

                return false;
            });

            $nav.hover(function(e) {
                if(e.type == 'mouseenter') {
                    if($nav.hasClass('min')) {
                        state = true;
                        $nav.removeClass('min').addClass('open');
                    }
                }
                else {
                    if(state) {
                        state = false;
                        $nav.addClass('min').removeClass('open');
                    }
                }
            });
        }
    });
})(Tc.$);
