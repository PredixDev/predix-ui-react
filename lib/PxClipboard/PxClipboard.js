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

var PxClipboard = function (_React$Component) {
	_inherits(PxClipboard, _React$Component);

	function PxClipboard(props) {
		_classCallCheck(this, PxClipboard);

		var _this = _possibleConstructorReturn(this, (PxClipboard.__proto__ || Object.getPrototypeOf(PxClipboard)).call(this, props));

		_this.state = {
			clipboardText: _this.props.value
		};
		return _this;
	}

	_createClass(PxClipboard, [{
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState({ clipboardText: event.target.value });
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			(0, _Helpers.attachEventListener)(this.clipboard, 'pxClipboardError', this.props.clipboardError);
			(0, _Helpers.attachEventListener)(this.clipboard, 'pxClipboardSuccess', this.props.clipboardSuccess);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.clipboard.removeEventListener('pxClipboardError', this.props.clipboardError);
			this.clipboard.removeEventListener('pxClipboardSuccess', this.props.clipboardSuccess);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'px-clipboard',
				{
					ref: function ref(n) {
						_this2.clipboard = n;
					},
					'data-clipboard-action': 'copy',
					'copy-from': this.props.copyClass,
					'data-clipboard-text': this.state.clipboardText },
				_react2.default.createElement('input', {
					type: 'text',
					className: this.props.copyClass + " text-input",
					value: this.props.value,
					readOnly: this.props.readOnly,
					onChange: function onChange(event) {
						_this2.handleChange(event);
						_this2.props.handleChange(event);
					}
				})
			);
		}
	}]);

	return PxClipboard;
}(_react2.default.Component);

PxClipboard.defaultProps = {
	value: "Copy Text Value",
	copyClass: "grabContent",
	readOnly: null
};

exports.default = PxClipboard;