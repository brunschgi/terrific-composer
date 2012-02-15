(function ($) {
    /**
     * Layout module implementation.
     *
     * @author Terrific Composer
     * @namespace Tc.Module
     * @class Layout
     * @extends Tc.Module
     */
    Tc.Module.Layout = Tc.Module.extend({

        /**
         * Initializes the Layout module.
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
         * Hook function to load the module specific dependencies.
         *
         * @method dependencies
         * @return void
         */
        dependencies: function() {
            this.require('jquery-ui-1.8.17.custom.min.js', 'library', 'onBinding');
        },

        /**
         * Hook function to bind the module specific events.
         *
         * @method onBinding
         * @return void
         */
        onBinding:function () {
            var $ctx = this.$ctx,
                that = this;

            // create modal
            var $modal = $('<div class="modalWindow"><span class="button delete closeModal"><span class="icon close">Close</span></span><div class="mod modLoader">&nbsp;</div><div class="modalContent"></div></div>');
            $ctx.append($modal);
            $modal.dialog({ autoOpen: false, modal: true, draggable: false, resizable: false, minWidth: 472, minHeight: 83 });
            that.sandbox.addModules($modal);

            // bind the modal dialogs
            $ctx.on('click', '.openModal', function() {
                var url =  $(this).attr('href');

                if(url) {
                    that.loadModal(url);
                }

                return false;
            });

            $ctx.on('click', '.closeModal', function() {
                $modal.dialog('close');

                // move content back (existing div) or kill the content (ajax)
                var $modalContent = $modal.find('.modalContent');

                if($modalContent.data('source')) {
                    // existing div
                    $modalContent.data('source').append($modalContent.children());
                }
                else {
                    // ajax
                    $modalContent.html('');
                }

            });
        },

        loadModal : function(url, data, callback) {
            var that = this,
                $ctx = this.$ctx,
                $modal = $('.modalWindow', $ctx),
                $modalContent = $modal.find('.modalContent'),
                $loader = $modal.find('> .modLoader');

            // remove old data
            $modalContent.removeData();

            if(url.indexOf('#') != 0) {
                // load the content via ajax

                // show modal
                $modal.dialog('open');
                $loader.show();

                if(data) {
                    // post request
                    $.post(url, data, function(data) {
                        var modules = [];

                        // remove old module instances in modal
                        $('.mod', $modalContent).each(function() {
                            modules.push(that.sandbox.getModuleById($(this).data('id')));
                        });

                        that.sandbox.removeModules(modules);

                        // add new modules
                        $loader.hide();
                        $modalContent.html(data);
                        that.sandbox.addModules($modalContent);

                        if($.isFunction(callback)) {
                            callback();
                        }
                    });
                } else {
                    // get request
                    $.get(url, function(data) {
                        var modules = [];

                        // remove old module instances in modal
                        $('.mod', $modalContent).each(function() {
                            modules.push(that.sandbox.getModuleById($(this).data('id')));
                        });
                        that.sandbox.removeModules(modules);

                        // add new modules
                        $loader.hide();
                        $modalContent.html(data);
                        that.sandbox.addModules($modalContent);

                        if($.isFunction(callback)) {
                            callback();
                        }
                    });
                }
            }
            else if(url.indexOf('#') == 0) {
                // display an existing div (via id)
                var $content = $(url, $ctx);

                if($content) {
                    $modalContent.data('source', $content.parent()).append($content);
                }

                if($.isFunction(callback)) {
                    callback();
                }

                // show modal
                $modal.dialog('open');
            }
        }
    });
})(Tc.$);
