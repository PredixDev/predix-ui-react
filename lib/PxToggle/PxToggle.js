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

var PxToggle = function (_React$Component) {
	_inherits(PxToggle, _React$Component);

	function PxToggle(props) {
		_classCallCheck(this, PxToggle);

		return _possibleConstructorReturn(this, (PxToggle.__proto__ || Object.getPrototypeOf(PxToggle)).call(this, props));
	}

	_createClass(PxToggle, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _Helpers.attachEventListener)(this.toggle, 'checked-changed', this.props.checkChanged);
			(0, _Helpers.attachEventListener)(this.toggle, 'invalid-changed', this.props.invalidChanged);
			(0, _Helpers.attachEventListener)(this.toggle, 'value-changed', this.props.valueChanged);

			this.hasValidator = function () {
				_this2.dropdown.hasValidator();
			};
			this.validate = function (value) {
				_this2.dropdown.validate();
			};
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.toggle.removeEventListener('checked-changed', this.props.checkChanged);
			this.toggle.removeEventListener('invalid-changed', this.props.invalidChanged);
			this.toggle.removeEventListener('value-changed', this.props.valueChanged);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement('px-toggle', {
				ref: function ref(n) {
					_this3.toggle = n;
				},
				size: this.props.size,
				checked: this.props.checked,
				name: this.props.name,
				required: this.props.required,
				toggles: this.props.toggles,
				validator: this.props.validator,
				value: this.props.value });
		}
	}]);

	return PxToggle;
}(_react2.default.Component);

PxToggle.defaultProps = {
	size: "regular",
	checked: null,
	name: null,
	required: null,
	toggles: null,
	validator: null,
	value: null
};

exports.default = PxToggle;