'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var attachEventListener = exports.attachEventListener = function attachEventListener(target, listener, callback) {
	target.addEventListener(listener, function (event) {
		if (typeof callback === 'function') {
			callback(event);
		}
	});
};