webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import './lib/jquery-ui.js';
	// import './lib/jquery.nicescroll.js';
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	});
	// import './lib/jquery.magnific-popup.js';
	// import './lib/slick.js';
	
	
	(0, _jquery2.default)(document).ready(function () {
		var mgLeft = (0, _jquery2.default)('.wrapper').css('margin-left');
		if ((0, _jquery2.default)('.title-bg').length) {
			(0, _jquery2.default)('.title-bg span').css('margin-left', mgLeft);
			console.log(mgLeft);
		}
		(0, _jquery2.default)('.hamburger').click(function () {
			(0, _jquery2.default)(this).toggleClass('is-active');
			(0, _jquery2.default)('.js-nav').toggleClass('is-active');
		});
		(0, _jquery2.default)('.top-carousel').owlCarousel({
			loop: true,
			dots: true,
			nav: true,
			navText: ['<svg class="top-carousel-left"><use xlink:href="../assets/images/icon.svg#icon_arrow-left"></use></svg>', '<svg class="top-carousel-right"><use xlink:href="../assets/images/icon.svg#icon_arrow-right"></use></svg>'],
			items: 1
		});
		(0, _jquery2.default)(".popular-carousel").owlCarousel({
			center: true,
			margin: 0,
			dots: false,
			loop: true,
			mouseDrag: false,
			nav: true,
			navText: ['<svg class="top-carousel-left"><use xlink:href="../assets/images/icon.svg#icon_arrow-left"></use></svg>', '<svg class="top-carousel-right"><use xlink:href="../assets/images/icon.svg#icon_arrow-right"></use></svg>'],
			responsive: {
				1200: {
					items: 5
				},
				500: {
					items: 3
				},
				0: {
					items: 1
				}
			}
		});
		(0, _jquery2.default)(".doctors-carousel").owlCarousel({
			center: true,
			margin: 0,
			dots: false,
			loop: false,
			startPosition: 0,
			items: 3,
			mouseDrag: false,
			navText: ['<svg class="top-carousel-left"><use xlink:href="../assets/images/icon.svg#icon_arrow-left"></use></svg>', '<svg class="top-carousel-right"><use xlink:href="../assets/images/icon.svg#icon_arrow-right"></use></svg>'],
			responsive: {
				767: {
					items: 3
				},
				0: {
					items: 1
				}
			}
		});
	});

/***/ })
])
//# sourceMappingURL=0.41218ab14f40804b6e87.hot-update.js.map