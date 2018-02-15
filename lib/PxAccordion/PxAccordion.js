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

var PxAccordion = function (_React$Component) {
	_inherits(PxAccordion, _React$Component);

	function PxAccordion(props) {
		_classCallCheck(this, PxAccordion);

		return _possibleConstructorReturn(this, (PxAccordion.__proto__ || Object.getPrototypeOf(PxAccordion)).call(this, props));
	}

	_createClass(PxAccordion, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _Helpers.attachEventListener)(this.accordion, "px-accordion-expanded", this.props.accordionExpanded);
			(0, _Helpers.attachEventListener)(this.accordion, "px-accordion-collapsed", this.props.accordionCollapsed);
			(0, _Helpers.attachEventListener)(this.accordion, "px-accordion-action-clicked", this.props.actionClicked);

			this.toggle = function () {
				_this2.accordion.toggle();
			};
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.accordion.removeEventListener('px-accordion-expanded', this.props.accordionExpanded);
			this.accordion.removeEventListener('px-accordion-collapsed', this.props.accordionCollapsed);
			this.accordion.removeEventListener('px-accordion-action-clicked', this.props.actionClicked);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'px-accordion',
				{
					ref: function ref(n) {
						_this3.accordion = n;
					},
					icons: this.props.icons,
					'header-value': this.props.headerValue,
					status: this.props.status,
					disabled: this.props.disabled,
					'show-action': this.props.showAction
				},
				this.props.children
			);
		}
	}]);

	return PxAccordion;
}(_react2.default.Component);

PxAccordion.defaultProps = {
	headerValue: "Header Caption",
	status: "Last Updated: 3 Days Ago",
	disabled: null,
	showAction: null
};

exports.default = PxAccordion;