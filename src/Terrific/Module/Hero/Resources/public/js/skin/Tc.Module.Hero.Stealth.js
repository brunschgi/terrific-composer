(function($) {
    /**
     * Stealth Skin implementation for module Hero.
     *
     * @author Terrific Composer
     * @namespace Tc.Module.Hero
     * @class Stealth
     * @extends Tc.Module
     * @constructor
     */
    Tc.Module.Hero.Stealth = function(parent) {
        /** 
         * override the appropriate methods from the decorated module (ie. this.get = function()).
         * the former/original method may be called via parent.<method>()
         */
        this.beforeBinding = function(callback) {
            // create mode chooser markup
            this.$ctx.append($('<div class="mode"><h3>Stealth Mode</h3><a href="#" title="activate stealth mode" class="on">on</a><a href="#" title="deactivate stealth mode" class="off">off</a></div>'));

            // calling parent method
            parent.beforeBinding(function() {
                callback();
            });
        };
        
        this.onBinding = function() {
            var that = this,
                $ctx = this.$ctx;

            // binding the stealth mode on / off events
            $('.on', $ctx).bind('click', function() {
                that.activateStealthMode();
                return false;
            });

            $('.off', $ctx).bind('click', function() {
                that.deactivateStealthMode();
                return false;
            });

            // calling parent method
            parent.onBinding();
        };

        this.activateStealthMode = function() {
            var that = this,
                $hero = $('pre', this.$ctx);

            $hero.hide(100).show(100).hide(100).show(100).animate({ opacity : 0.2 }, 500, function() {
                $hero.show(200).hide(200).show(200).hide(200);
            });
        };

        this.deactivateStealthMode = function() {
            var that = this,
                $hero = $('pre', this.$ctx)

            $hero.show(200).hide(200).show(200).animate({ opacity : 1 }, 500, function() {
                $hero.hide(100).show(100).hide(100).show(100);
            });
        };
    };
})(Tc.$);
