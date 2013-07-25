<?php
/**
 * @package Formidable
 */
/*
Plugin Name: Formidable Plus Incrementer
Description: An example plugin to show how to extend Formidable Plus.  Creates an incrementer field.  
Version: 1
Plugin URI: http://topquark.com/extend/plugins/formidable-plus
Author URI: http://topquark.com
Author: topquarky
*/

/*  Copyright 2013  topquark  (email : support@topquark.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/
  
add_action('wp_print_scripts','fplus_incrementer_add_script');
function fplus_incrementer_add_script(){
	wp_enqueue_script( 'fplus_incrementer', plugins_url( 'js/jquery.fplus_incrementer.js' , __FILE__ ) );
}

add_action('wp_print_styles','fplus_incrementer_add_style');
function fplus_incrementer_add_style(){
	echo '
<style type="text/css">
.with_frm_style .frm-table input.fplus-incrementer{
	color:black;
	opacity: 1;
	filter: alpha(opacity=100);
	background-color:white;
	border:none;
}
</style>
';
}
