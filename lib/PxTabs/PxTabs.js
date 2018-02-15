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

var PxTabs = function (_React$Component) {
	_inherits(PxTabs, _React$Component);

	function PxTabs(props) {
		_classCallCheck(this, PxTabs);

		return _possibleConstructorReturn(this, (PxTabs.__proto__ || Object.getPrototypeOf(PxTabs)).call(this, props));
	}

	_createClass(PxTabs, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _Helpers.attachEventListener)(this.tabs, 'items-changed', this.props.itemsChanged);
			(0, _Helpers.attachEventListener)(this.tabs, 'px-tab-changed', this.props.tabChanged);
			(0, _Helpers.attachEventListener)(this.tabs, 'selected-changed', this.props.selectedChanged);
			(0, _Helpers.attachEventListener)(this.tabs, 'selected-item-changed', this.props.selectedItemChanged);

			this.select = function (value) {
				_this2.tabs.select(value);
			};
			this.selectNext = function () {
				_this2.tabs.selectNext();
			};
			this.selectPrevious = function () {
				_this2.tabs.selectPrevious();
			};
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.tabs.removeEventListener('items-changed', this.props.itemsChanged);
			this.tabs.removeEventListener('px-tab-changed', this.props.tabChanged);
			this.tabs.removeEventListener('selected-changed', this.props.selectedChanged);
			this.tabs.removeEventListener('selected-item-changed', this.props.selectedItemChanged);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'px-tabs',
				{ selected: this.props.selected,
					ref: function ref(n) {
						_this3.tabs = n;
					} },
				this.props.children
			);
		}
	}]);

	return PxTabs;
}(_react2.default.Component);

PxTabs.defaultProps = {
	selected: 0
};

exports.default = PxTabs;