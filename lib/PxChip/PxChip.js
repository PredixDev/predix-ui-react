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

var PxChip = function (_React$Component) {
	_inherits(PxChip, _React$Component);

	function PxChip(props) {
		_classCallCheck(this, PxChip);

		return _possibleConstructorReturn(this, (PxChip.__proto__ || Object.getPrototypeOf(PxChip)).call(this, props));
	}

	_createClass(PxChip, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			(0, _Helpers.attachEventListener)(this.chip, 'px-chip-tapped', this.props.chipTapped);
			(0, _Helpers.attachEventListener)(this.chip, 'selected-changed', this.props.selectedChanged);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.chip.removeEventListener('px-chip-tapped', this.props.chipTapped);
			this.chip.removeEventListener('selected-changed', this.props.selectedChanged);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement('px-chip', {
				ref: function ref(n) {
					_this2.chip = n;
				},
				content: this.props.content,
				icon: this.props.icon,
				showIcon: this.props.showIcon,
				selected: this.props.selected });
		}
	}]);

	return PxChip;
}(_react2.default.Component);

PxChip.defaultProps = {
	icon: "px-utl:close",
	content: "Place content here"
};

exports.default = PxChip;