'use strict';
/* global Modernizr*/

/*
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

 app.js

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

 This is the entry point for front-end javascript

*/

import * as $ from '../../bower_components/utils.js/utils';
import {Basicslider} from './Basicslider';

var App = App || {};


/*
	
 Primary page function
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

*/

App.pageInit = () => {
	console.log('Initialised the app');

	// Run some functions when page is loaded
	let contentSlider = new Basicslider({
		slider: document.getElementById('content-slider'),
		bullets: true
	});

	contentSlider.init();
	
};


/*
	
 Initialise app
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

*/

App.pageInit();