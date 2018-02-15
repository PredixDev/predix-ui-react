'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Helpers = require('../Helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PxTooltip = function (_React$Component) {
	_inherits(PxTooltip, _React$Component);

	function PxTooltip(props) {
		_classCallCheck(this, PxTooltip);

		return _possibleConstructorReturn(this, (PxTooltip.__proto__ || Object.getPrototypeOf(PxTooltip)).call(this, props));
	}

	_createClass(PxTooltip, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _Helpers.attachEventListener)(this.pxTooltip, "for-changed", this.props.forChanged);
			(0, _Helpers.attachEventListener)(this.pxTooltip, "open-requested-changed", this.props.openRequestChanged);
			(0, _Helpers.attachEventListener)(this.pxTooltip, "open-changed", this.props.openChanged);
			(0, _Helpers.attachEventListener)(this.pxTooltip, "px-tooltip-hide", this.props.pxTooltipHide);
			(0, _Helpers.attachEventListener)(this.pxTooltip, "px-tooltip-request-hide", this.props.pxTooltipRequestHide);
			(0, _Helpers.attachEventListener)(this.pxTooltip, "px-tooltip-request-show", this.props.pxTooltipRequestShow);
			(0, _Helpers.attachEventListener)(this.pxTooltip, "px-tooltip-show", this.props.pxTooltipShow);
			(0, _Helpers.attachEventListener)(this.pxTooltip, "visible-changed", this.props.visibleChanged);

			this.listenEvents = function () {
				_this2.pxTooltip.listenEvents();
			};

			this.setPosition = function () {
				_this2.pxTooltip.setPosition();
			};

			this.unlistenEvents = function () {
				_this2.pxTooltip.unlistenEvents();
			};
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.pxTooltip.removeEventListener("for-changed", this.props.forChanged);
			this.pxTooltip.removeEventListener("open-requested-changed", this.props.openRequestChanged);
			this.pxTooltip.removeEventListener("open-changed", this.props.openChanged);
			this.pxTooltip.removeEventListener("px-tooltip-hide", this.props.pxTooltipHide);
			this.pxTooltip.removeEventListener("px-tooltip-request-hide", this.props.pxTooltipRequestHide);
			this.pxTooltip.removeEventListener("px-tooltip-request-show", this.props.pxTooltipRequestShow);
			this.pxTooltip.removeEventListener("px-tooltip-show", this.props.pxTooltipShow);
			this.pxTooltip.removeEventListener("visible-changed", this.props.visibleChanged);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement('px-tooltip', {
				ref: function ref(input) {
					_this3.pxTooltip = input;
				},
				delay: this.props.delay + "",
				'follow-mouse': this.props.followMouse,
				'for': this.props.for,
				'ignore-target-events': this.props.ignoreTargetEvents,
				'mouse-coords': this.props.mouseCoords,
				opened: this.props.opened,
				orientation: this.props.orientation,
				'smart-orientation': this.props.smartOrientation,
				'tooltip-message': this.props.tooltipMessage,
				'watch-dog-timeout': this.props.watchDogTimeout + ""
			});
		}
	}]);

	return PxTooltip;
}(_react2.default.Component);

PxTooltip.defaultProps = {
	delay: "500",
	followMouse: null,
	for: "",
	ignoreTargetEvents: null,
	mouseCoords: '["-9999", "-9999"]',
	opened: null,
	orientation: "auto",
	smartOrientation: null,
	tooltipMessage: "",
	watchDogTimeout: "250"
};

exports.default = PxTooltip;