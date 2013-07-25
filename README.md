Formidable Plus Incrementer
===========================

Formidable Plus Incrementer - An Example Add-On to Formidable Plus.

This is a WordPress plugin that includes a jQuery add-on in your WordPress site that is using Formidable Plus.  

See readme.txt.

*Usage*

	jQuery(function($){
		// Change 798 below to the Field ID of your table
		$('#frm-table-798').fplus_incrementer( {
			column: 0 // Note, columns are ZERO based.
		});
	});
