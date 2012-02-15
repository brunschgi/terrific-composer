(function ($) {
    /**
     * Content module implementation.
     *
     * @author Remo Brunschwiler
     * @namespace Tc.Module
     * @class Content
     * @extends Tc.Module
     */
    Tc.Module.Content = Tc.Module.extend({

        /**
         * Initializes the Content module.
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
        dependencies:function () {
        },

        /**
         * Hook function to do module specific stuff before binding the events (i.e. fetching some data).
         *
         * @method beforeBinding
         * @param {Function} callback the callback function which must be called at the end
         * @return void
         */
        beforeBinding:function (callback) {
            callback();
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

            $('.toggle', $ctx).on('click', function () {
                var $this = $(this),
                    $content = $this.closest('.bar').next('.content');

                if ($this.hasClass('max')) {
                    $content.slideUp(200);
                    $this.removeClass('max').addClass('min');
                }
                else {
                    $content.slideDown(200);
                    $this.removeClass('min').addClass('max');
                }
            });

            /* Define two custom functions (asc and desc) for string sorting */
            /* $.fn.dataTableExt.oSort['string-case-asc']  = function(x,y) {
                return ((x < y) ? -1 : ((x > y) ?  1 : 0));
            };

            $.fn.dataTableExt.oSort['string-case-desc'] = function(x,y) {
                return ((x < y) ?  1 : ((x > y) ? -1 : 0));
            };

            this.table = $('.sort', $ctx).dataTable({
                "sScrollY" : '100px',
                "bAutoWidth" : true,
                "bInfo" : false,
                "bFilter" : true,
                "bPaginate": false,
                "aaSorting": [ [0,'asc'], [1,'asc'] ],
                "aoColumnDefs": [
                    { "sType": 'string-case', "aTargets": [ 2 ] }
                ]
            });


            $(window).on('resize', function() {
                that.table.fnAdjustColumnSizing();
            }); */
        },

        onSizeChange: function() {
           // this.table.fnAdjustColumnSizing();
        }
    });
})(Tc.$);
