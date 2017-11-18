/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

// установливаем обработчик события resize
$(window).resize(function () {
		console.log('width', $(window).width());

		var mobileWidth = $(window).width() < 740;

		console.log('mobileWidth', mobileWidth);

		if (mobileWidth) {
				mySlider(); // вызовем событие слайдер
		}
});

// вызовем событие resize
$(window).resize();

function mySlider() {
		var controls = document.querySelectorAll('.controls');

		for (var i = 0; i < controls.length; i++) {
				controls[i].style.display = 'inline-block';
		}

		var slides = document.querySelectorAll('.product_galery .item_gallery');
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide, 3000);

		function nextSlide() {
				goToSlide(currentSlide + 1);
		}

		function previousSlide() {
				goToSlide(currentSlide - 1);
		}

		function goToSlide(n) {
				slides[currentSlide].className = 'item_gallery';
				currentSlide = (n + slides.length) % slides.length;
				slides[currentSlide].className = 'item_gallery showing';
		}

		var playing = true;

		function playSlideshow() {
				playing = true;
				slideInterval = setInterval(nextSlide, 2000);
		}

		var next = document.getElementById('next');
		var previous = document.getElementById('previous');

		next.onclick = function () {
				nextSlide();
		};

		previous.onclick = function () {
				previousSlide();
		};
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);