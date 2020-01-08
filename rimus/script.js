'use strict';
var app = new Vue({
	el: '#app',
	data: {
		days: null,
		hours: null,
		minutes: null,
		progress: null,
		isOver: false
	},

	methods: {
		getRemains: function () {
			var vm = this;
			var from = new Date(2019, 11, 1),
				current = new Date(),
				target = new Date(2020, 0, 31);
			vm.days = new Date(target - current).getDate() - 1;
			vm.hours = 23 - current.getHours();
			vm.minutes = 60 - current.getMinutes();
			console.log((current.getTime() - from.getTime()) / (target.getTime() - from.getTime()));
			vm.progress = ((current.getTime() - from.getTime()) / (target.getTime() - from.getTime()) * 100).toFixed(2);
		}
	},

	mounted: function () {
		var vm = this;
		this.getRemains();
		setInterval(function () {
			vm.getRemains();
		}, 1000);
	}
});
Vue.config.devtools = true;
