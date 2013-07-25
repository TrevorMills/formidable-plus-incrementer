=== Formidable Plus Incrementer ===
Contributors: topquarky
Tags: example, formidable-plus
Tested up to: 3.5.1
Stable tag: 1

This is an example plugin for Formidable Plus that adds some Javascript capabilities to a table.  This example adds an un-editable incrementing field.  

== Description ==

This is an example plugin for Formidable Plus that adds some Javascript capabilities to a table.  This example adds an un-editable incrementing field.  

== Installation ==

1. Download Formidable Plus from [topquark.com/extend/plugins/formidable-plus-incrementer](http://topquark.com/extend/plugins/formidable-plus-incrementer)
1. Install the ZIP file to your server and activate the plugin

== Frequently Asked Questions ==

= What does this do? =

This plugin contains a jQuery extension that allows you to setup a table with an incrementing, non-editable field.  Call it by using this Javascript snippet:

`jQuery(function($){
	// Change 798 below to the Field ID of your table
	$('#frm-table-798').fplus_incrementer( {
		column: 0 // Note, columns are ZERO based.
	});
});`

== Changelog ==


== Upgrade Notice ==

= 1.0.4 =
You will have to re-enter your TopQuark credentials on the Settings > Formidable Plus page.

= 1.0.2 =
You will only be able to upgrade to this version after purchasing the plugin from [TopQuark.com](http://topquark.com/extend/plugins/formidable-plus)

= 1.0.1 =
No upgrade notice

