'use strict';
/* global Modernizr*/

import * as $ from '../../bower_components/utils.js/utils';

/*
| Simple content slider
|--------------------------------------------------------------------------
|
| TO DO: add extra width to slide width to account for sub pixel rendering
| TO DO: add destroy method
| TO DO: currently removes all other classes on slides. Update to add classes
| TO DO: create arrays for bullets and nav so easy to remove event listeners on destroy
| TO DO: streamline auto bullet nav and user specified nav as currently bit of a mess
|
*/

class Basicslider {
	constructor(options) {
		this.slider = options.slider;
		this.slides = this.slider.children;
		this.slideCount = this.slides.length;
		this.currentSlide = 0;
		this.prevLink = null;
		this.nextLink = null;
		this.nextText = options.nextText || 'next';
		this.prevText = options.prevText || 'prev';
		this.bullets = options.bullets;
		this.slideNav = options.slideNav;
		this.classList = options.classList || '';
		this.navLinks = null; // These are triggers specified by the user, as opposed to bullet nav
		this.bulletLinks = null; // These are the default bullet naviagtion

		if(this.slideNav) {
			this.navLinks = document.getElementsByClassName(this.slideNav);
		}
	}

	init() {
		let self = this,
			sliderWrap = document.createElement('div'),
			viewport = document.createElement('div'),
			// Add extra pixels to slides to deal with pixel rounding issues
			sliderWidth = 'calc(' + (this.slideCount * 100) + '%' + ' + ' + (this.slideCount * 2) + 'px)';

		// Add slider class
		this.slider.className += ' bs-slider';

		// Create a viewport and wrapper
		sliderWrap.className = 'bs-wrap ' + this.classList;
		viewport.className = 'bs-viewport';
		$.wrap(this.slider, viewport);
		$.wrap(viewport, sliderWrap);

		// Add slide classes
		Array.prototype.forEach.call(this.slides, function(el, i) {
			el.className += ' bs-slide';
		});

		// Create the slider arrows
		let navClasses = [[this.prevText, 'bs-prev'], [this.nextText, 'bs-next']],
			nav = document.createElement('ul'),
			navFrag = document.createDocumentFragment();


		navClasses.forEach(function(el, i, arr) {
			let li = document.createElement('li'),
				a = document.createElement('a');

			// Create the nav links and add event listeners
			a.innerHTML = navClasses[i][0];
			a.setAttribute('href','#');
			navFrag.appendChild(li);
			li.appendChild(a);
			if(i === 0) {
				a.addEventListener('click', self.goToPrevSlide.bind(self), false);
				self.prevLink = a;
			} else {
				a.addEventListener('click', self.goToNextSlide.bind(self), false);
				self.nextLink = a;	
			}
			li.className = navClasses[i][1];
		});

		viewport.parentNode.insertBefore(nav, viewport);
		nav.className = 'bs-arrow-nav';
		nav.appendChild(navFrag);


		// Update the slider width
		this.slider.style.width = sliderWidth;

		// Create a bullet nav
		if(this.bullets) {
			let bulletFrag = document.createDocumentFragment();

			let bulletNav = document.createElement('ul');
			bulletNav.className = 'bs-bullet-nav';

			Array.prototype.forEach.call(this.slides, function(el, i) {
				
				let li = document.createElement('li'),
					a = document.createElement('a');

				// Add a data reference for corresponding slide
				a.setAttribute('data-slide-ref', i);

				// Create the bullet links
				a.innerHTML = i;
				a.setAttribute('href','#');
				bulletFrag.appendChild(li);

				// Add active class for first link
				if(i === 0) {
					a.className = 'is-active';
				}

				li.appendChild(a);

				// Add event listeners
				a.addEventListener('click', self.goToSlideFromRef.bind(self, a), false);
			});

			// Insert bullet nav after viewport
			viewport.parentNode.insertBefore(bulletNav, viewport.nextSibling);
			bulletNav.appendChild(bulletFrag);

			// Cache the bullet links
			this.bulletLinks = bulletNav.getElementsByTagName('a');
		}

		// Create listeners for user specified navigation
		if(this.slideNav) {
			let self = this;

			Array.prototype.forEach.call(this.navLinks, function(el,i) {
				
				// Add active class for first link
				if(i === 0) {
					el.className += ' is-active';
				}

				el.addEventListener('click', self.goToSlideFromRef.bind(self, el), false);
			});
		}

	}

	goToNextSlide(e) {
		this.goToSlide(this.currentSlide + 1);

		if(e) {
			e.preventDefault();
		}
	}

	goToPrevSlide(e) {
		this.goToSlide(this.currentSlide - 1);
		
		if(e) {
			e.preventDefault();
		}
	}

	goToSlideFromRef(el, e) {
		
		// Get reference for next slide
		let slideRef = el.getAttribute('data-slide-ref');
		this.setActiveBullet(slideRef);
		
		// Slide to next slide
		this.goToSlide(slideRef);
		e.preventDefault();
	}

	setActiveBullet(int) {

		// Update classes on bullet nav
		if(this.bullets) {
			Array.prototype.forEach.call(this.bulletLinks, function(el,i) {
				$.removeClass(el, 'is-active');
			});

			this.bulletLinks[int].className += ' is-active';
		}

		// Update classes on user specified nav
		if(this.navLinks) {
			Array.prototype.forEach.call(this.navLinks, function(el,i) {
				$.removeClass(el, 'is-active');
			});

			this.navLinks[int].className += ' is-active';
		}
	}

	goToSlide(int) {

		// Work out slide distance
		if(int < 0) {
			int = this.slideCount - 1;
		}
		else if(int >= this.slideCount) {
			int = 0;
		}

		let posUpdate = -(100 / this.slideCount) * int;

		// Update active nav / bullets classes
		this.setActiveBullet(int);

		// Update slider css
		if(!Modernizr.csstransforms3d) {
			this.slider.style.transform = 'translateX(' + posUpdate + '%)';
			this.slider.style.msTransform = 'translateX(' + posUpdate + '%)';	
		} else {
			// Adding extra 1px to deal with pixel rounding issues. Can't use calc() as not supported in IE
			this.slider.style.transform = 'translateX(' + posUpdate + '%) translateX(-1px)';
			this.slider.style.webkitTransform = 'translateX(' + posUpdate + ') translateX(-1px)';	
		}

		// Update current slide ref
		this.currentSlide = int;
	}

	destroy() {

	}
}

export {Basicslider};