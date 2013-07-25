(function($){
	var fplus_incrementer = {
		init : function( options ) { 
			return this.each(function(){

				$(this).data('fplus_incrementer', $.extend({  
					// add any default options you want here like:
					// style: 'numeric',
					column: 0, // note the columns are ZERO based.
				}, options));
				
				fplus_incrementer.setup_triggers.call(this);
				fplus_incrementer.do_the_do.call(this);
			});
		},
		
		setup_triggers: function(){
			// These events are Formidable Plus events triggered when someone adds or removes a row
			$(this).on( 'add_row' , fplus_incrementer.do_the_do );
			$(this).on( 'delete_row' , fplus_incrementer.do_the_do );
		},
		
		do_the_do: function(){
			
			var options = $(this).data('fplus_incrementer');
			
			// Reset the counter
			fplus_incrementer.counter = 0;
			
			// Loop through all of the specified column
			$(this).find('.column-' + options.column).each(function(){
				if ($(this).is('th')){
					// don't do anything with the table header
					return;
				}

				// Disable the input, add a class, set the value to the current value of fplus_incrementer.counter (plus 1), then increment that counter
				$(this).find( 'input' ).prop( 'disabled', true ).addClass( 'fplus-incrementer' ).val( fplus_incrementer.counter++ + 1);
			});			
		},	
	};
	
	$.fn.fplus_incrementer = function( method ) {
		// Method calling logic
		if ( fplus_incrementer[method] ) {
			return fplus_incrementer[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return fplus_incrementer.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.fplus_incrementer' );
		}    
	};
})(jQuery);
