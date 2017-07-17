webpackHotUpdate(0,{

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	// Uses CommonJS, AMD or browser globals to create a jQuery plugin.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(78), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (slick, $) {
		$(document).ready(function () {
			$('.block-tree-slides').slick({
				dots: false,
				infinite: true,
				speed: 1500,
				slidesToShow: 1,
				autoplay: true,
				pauseOnHover: false,
				autoplaySpeed: 6000,
				adaptiveHeight: true
			});
			$('.block-tree-slides2').slick({
				dots: false,
				infinite: true,
				speed: 1500,
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 6000,
				adaptiveHeight: true
			});
			$('.block-sliderPersonal').slick({
				dots: false,
				infinite: true,
				speed: 700,
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				adaptiveHeight: true,
				touchMove: false,
				responsive: [{
					breakpoint: 760,
					touchMove: true
				}]
			});
			$('.block-slidetOtziv').slick({
				dots: false,
				infinite: true,
				speed: 700,
				slidesToShow: 1,
				autoplay: false,
				// autoplaySpeed: 3000,
				adaptiveHeight: true,
				touchMove: false,
				responsive: [{
					breakpoint: 760,
					touchMove: true
				}]
			});
			$('.titleSlider').slick({
				dots: false,
				infinite: true,
				speed: 700,
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				touchMove: false,
				adaptiveHeight: true
			});
			$('.firms').slick({
				dots: false,
				infinite: true,
				speed: 700,
				slidesToShow: 5,
				slidesToScroll: 5,
				autoplay: true,
				autoplaySpeed: 5000,
				touchMove: false,
				adaptiveHeight: false,
				asNavFor: '.firms',
				appendArrows: $('#firmsArrows'),
				responsive: [{
					breakpoint: 1350,
					settings: {
						slidesToScroll: 4,
						slidesToShow: 4
					}
				}, {
					breakpoint: 1020,
					settings: {
						slidesToScroll: 3,
						slidesToShow: 3
					}
				}, {
					breakpoint: 850,
					settings: {
						slidesToScroll: 1,
						slidesToShow: 1,
						centerMode: true,
						variableWidth: true
					}
				}]
			});
		});
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})
//# sourceMappingURL=0.3f984b7db1d430cc2375.hot-update.js.map