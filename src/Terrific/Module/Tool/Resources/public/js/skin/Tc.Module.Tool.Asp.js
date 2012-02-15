(function($) {
    /**
     * Asp Skin implementation for module Tool.
     *
     * @author Terrific Composer
     * @namespace Tc.Module.Tool
     * @class Asp
     * @extends Tc.Module
     * @constructor
     */
    Tc.Module.Tool.Asp = function(parent) {
        /** 
         * override the appropriate methods from the decorated module (ie. this.get = function()).
         * the former/original method may be called via parent.<method>()
         */
        this.dependencies = function() {
            // calling parent method
            parent.dependencies();
        };
        
        this.beforeBinding = function(callback) {
            // calling parent method
            parent.beforeBinding(function() {
                callback();
            });
        };
        
        this.onBinding = function() {
            // calling parent method
            parent.onBinding();
        };
        
        this.afterBinding = function() {
            // calling parent method
            parent.afterBinding();
        };
    };
})(Tc.$);
