"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PxProgressBar = function (_React$Component) {
	_inherits(PxProgressBar, _React$Component);

	function PxProgressBar(props) {
		_classCallCheck(this, PxProgressBar);

		return _possibleConstructorReturn(this, (PxProgressBar.__proto__ || Object.getPrototypeOf(PxProgressBar)).call(this, props));
	}

	_createClass(PxProgressBar, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("px-progress-bar", {
				infinite: this.props.infinite,
				max: this.props.max + "",
				min: this.props.min + "",
				value: this.props.value + ""
			});
		}
	}]);

	return PxProgressBar;
}(_react2.default.Component);

PxProgressBar.defaultProps = {
	infinite: null,
	max: "100",
	min: "0",
	value: "0"
};

exports.default = PxProgressBar;