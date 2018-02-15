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

var PxPanel = function (_React$Component) {
	_inherits(PxPanel, _React$Component);

	function PxPanel(props) {
		_classCallCheck(this, PxPanel);

		return _possibleConstructorReturn(this, (PxPanel.__proto__ || Object.getPrototypeOf(PxPanel)).call(this, props));
	}

	_createClass(PxPanel, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _Helpers.attachEventListener)(this.pxPanel, "open-changed", this.props.openChanged);

			this.close = function () {
				_this2.pxPanel.close();
				_this2.pxPanel.opened = null;
				var event = new Event("open-changed");
				_this2.pxPanel.dispatchEvent(event);
			};

			this.open = function () {
				_this2.pxPanel.open();
				var event = new Event("open-changed");
				_this2.pxPanel.dispatchEvent(event);
			};
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.pxPanel.removeEventListener("open-changed", this.props.openChanged);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'px-panel',
				{
					ref: function ref(input) {
						_this3.pxPanel = input;
					},
					background: this.props.background,
					fixed: this.props.fixed,
					floating: this.props.floating,
					'key-bindings': this.props.keyBindings,
					'key-event-target': this.props.keyEventTarget,
					minimizable: this.props.minimizable,
					opened: this.props.opened,
					persistent: this.props.persistent,
					position: this.props.position,
					'stop-keyboard-event-propagation': this.props.stopKeyboardEventPropagation
				},
				this.props.children
			);
		}
	}]);

	return PxPanel;
}(_react2.default.Component);

PxPanel.defaultProps = {
	backrgound: "light",
	fixed: null,
	floating: null,
	minimizable: null,
	opened: null,
	persistent: null,
	position: "right",
	stopKeyboardEventPropagation: null
};

exports.default = PxPanel;