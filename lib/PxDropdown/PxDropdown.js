'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Helpers = require('../Helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PxDropdown = function (_React$Component) {
	_inherits(PxDropdown, _React$Component);

	function PxDropdown(props) {
		_classCallCheck(this, PxDropdown);

		return _possibleConstructorReturn(this, (PxDropdown.__proto__ || Object.getPrototypeOf(PxDropdown)).call(this, props));
	}

	_createClass(PxDropdown, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _Helpers.attachEventListener)(this.dropdown, 'app-localize-resources-error', this.props.localizeResourcesError);
			(0, _Helpers.attachEventListener)(this.dropdown, 'app-localize-resources-loaded', this.props.localizeResourcesLoaded);
			(0, _Helpers.attachEventListener)(this.dropdown, 'display-value-changed', this.props.displayValueChanged);
			(0, _Helpers.attachEventListener)(this.dropdown, 'hover-changed', this.props.hoverChanged);
			(0, _Helpers.attachEventListener)(this.dropdown, 'items-changed', this.props.itemsChanged);
			(0, _Helpers.attachEventListener)(this.dropdown, 'opened-changed', this.props.openedChanged);
			(0, _Helpers.attachEventListener)(this.dropdown, 'px-dropdown-click', this.props.dropdownClick);
			(0, _Helpers.attachEventListener)(this.dropdown, 'px-dropdown-selection-changed', this.props.selectionChanged);
			(0, _Helpers.attachEventListener)(this.dropdown, 'selected-changed', this.props.selectedChanged);
			(0, _Helpers.attachEventListener)(this.dropdown, 'selected-values-changed', this.props.selectedValuesChanged);

			this.loadResources = function (path, language, merge) {
				_this2.dropdown.loadResources(path, language, merge);
			};
			this.toggle = function () {
				_this2.dropdown.toggle();
			};
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.dropdown.removeEventListener('app-localize-resources-error', this.props.localizeResourcesError);
			this.dropdown.removeEventListener('app-localize-resources-loaded', this.props.localizeResourcesLoaded);
			this.dropdown.removeEventListener('display-value-changed', this.props.displayValueChanged);
			this.dropdown.removeEventListener('hover-changed', this.props.hoverChanged);
			this.dropdown.removeEventListener('items-changed', this.props.itemsChanged);
			this.dropdown.removeEventListener('opened-changed', this.props.openedChanged);
			this.dropdown.removeEventListener('px-dropdown-click', this.props.dropdownClick);
			this.dropdown.removeEventListener('px-dropdown-selection-changed', this.props.selectionChanged);
			this.dropdown.removeEventListener('selected-changed', this.props.selectedChanged);
			this.dropdown.removeEventListener('selected-values-changed', this.props.selectedValuesChanged);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this,
			    _React$createElement;

			return _react2.default.createElement('px-dropdown', (_React$createElement = {
				ref: function ref(n) {
					_this3.dropdown = n;
				},
				'allow-outside-scroll': this.props.allowOutsideScroll,
				boundTarget: this.props.boundTarget,
				'button-style': this.props.buttonStyle,
				'clear-selections-on-change': this.props.clearSelectionsOnChange,
				'disable-clear': this.props.disableClear,
				disabled: this.props.disabled,
				'disable-dynamic-align': this.props.disableDynamicAlign,
				'disable-select': this.props.disableSelect,
				formats: this.props.formats,
				'hide-chevron': this.props.hideChevron,
				'hide-mobile-buttons': this.props.hideMobileButtons,
				'hide-selected': this.props.hideSelected,
				'horizontal-align': this.props.horizontalAlign,
				icon: this.props.icon,
				language: this.props.language,
				'mobile-at': this.props.mobileAt,
				multi: this.props.multi,
				'prevent-close-on-outside-click': this.props.preventCloseOnOutsideClick,
				resources: this.props.resources,
				'search-mode': this.props.searchMode,
				'search-term': this.props.searchTerm,
				'show-caret': this.props.showCaret,
				'sort-mode': this.props.sortMode,
				'trigger-height': this.props.triggerHeight,
				'use-key-if-missing': this.props.useKeyIfMissing,
				'vertical-align': this.props.verticalAlign,
				items: '[{"key":"1","val":"iPhone"},{"key":"2","val":"Android"},{"key":"3","val":"Blackberry"},{"key":"4","val":"Windows Phone"},{"key":"5","val":"Flip Phone","disabled":true}]'
			}, _defineProperty(_React$createElement, 'button-style', 'default'), _defineProperty(_React$createElement, 'display-value', 'Select'), _defineProperty(_React$createElement, 'disable-clear', true), _React$createElement));
		}
	}]);

	return PxDropdown;
}(_react2.default.Component);

PxDropdown.defaultProps = {
	allowOutsideScroll: null,
	boundTarget: null,
	buttonStyle: 'default',
	clearSelectionsOnChange: null,
	disableClear: null,
	disabled: null,
	disableDynamicAlign: null,
	disableSelect: null,
	formats: null,
	hideChevron: null,
	hideMobileButtons: null,
	hideSelected: null,
	horizontalAlign: null,
	icon: null,
	language: null,
	mobileAt: null,
	multi: null,
	preventCloseOnOutsideClick: null,
	resources: null,
	searchMode: null,
	searchTerm: null,
	showCaret: null,
	sortMode: null,
	triggerHeight: null,
	useKeyIfMissing: null,
	verticalAlign: null
};

exports.default = PxDropdown;