(function($){
	$.fn.checkbox = function(options){
		
		// Default On / Off labels:
		options = $.extend({
			labels : ['ON','OFF']
		},options);
		
		return this.each(function(){
			var originalCheckBox = $(this),
				labels = [];

			// Checking for the data-on / data-off HTML5 data attributes:
			if(originalCheckBox.data('on')){
				labels[0] = originalCheckBox.data('on');
				labels[1] = originalCheckBox.data('off');
			}
			else labels = options.labels;

			// Creating the new checkbox markup:
			var checkBox = $('<span>',{
				class	: 'checkbox '+(this.checked?'checked':''),
				html:	'<span class="content">'+labels[this.checked?0:1]+
						'</span><span class="part"></span>'
			});

			// Inserting the new checkbox, and hiding the original:
			checkBox.insertAfter(originalCheckBox.hide());

			checkBox.click(function(){
				checkBox.toggleClass('checked');
				
				var isChecked = checkBox.hasClass('checked');
				
				// Synchronizing the original checkbox:
				originalCheckBox.attr('checked',isChecked);
				checkBox.find('.content').html(labels[isChecked?0:1]);
			});
			
			// Listening for changes on the original and affecting the new one:
			originalCheckBox.bind('change',function(){
				checkBox.click();
			});
		});
	};
})(jQuery);
