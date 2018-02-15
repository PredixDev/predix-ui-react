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

var PxAppNav = function (_React$Component) {
	_inherits(PxAppNav, _React$Component);

	function PxAppNav(props) {
		_classCallCheck(this, PxAppNav);

		return _possibleConstructorReturn(this, (PxAppNav.__proto__ || Object.getPrototypeOf(PxAppNav)).call(this, props));
	}

	_createClass(PxAppNav, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _Helpers.attachEventListener)(this.appNav, "all-collapsed-changed", this.props.allCollapsedChanged);
			(0, _Helpers.attachEventListener)(this.appNav, "any-overflowed-changed", this.props.anyOverFlowedChanged);
			(0, _Helpers.attachEventListener)(this.appNav, "collapse-all-changed", this.props.collapseAllChanged); // property has to be null to no collapse, false does not work.
			(0, _Helpers.attachEventListener)(this.appNav, "collapse-opened-changed", this.props.collapseOpenedChanged);
			(0, _Helpers.attachEventListener)(this.appNav, "overflowed-items-changed", this.props.overflowedItemsChanged); //array of items
			(0, _Helpers.attachEventListener)(this.appNav, "px-app-asset-selected", this.props.pxAppAssetSelected);
			(0, _Helpers.attachEventListener)(this.appNav, "selected-changed", this.props.selectedChange);
			(0, _Helpers.attachEventListener)(this.appNav, "selected-meta-changed", this.props.selectedMetaChanged);
			(0, _Helpers.attachEventListener)(this.appNav, "selected-route-changed", this.props.selectedRouteChanged);
			(0, _Helpers.attachEventListener)(this.appNav, "some-overflowed-changed", this.props.someOverFlowedChanged);
			(0, _Helpers.attachEventListener)(this.appNav, "vertical-opened-changed", this.props.verticalOpenedChanged);
			(0, _Helpers.attachEventListener)(this.appNav, "visible-items-changed", this.props.visibleItemsChanged);

			this.addChildren = function (node, children, options) {
				_this2.appNav.addChildre(node, children, options);
			};

			this.assignParentResizable = function (parentResizable) {
				_this2.appNav.assignParentResizable(parentResizable);
			};

			this.deselect = function (item, source) {
				_this2.appNav.deselect(item, source);
			};

			this.multiSelect = function (val) {
				_this2.appNav.multiSelect(val);
			};

			this.notifyResize = function () {
				_this2.appNav.notifyResize();
			};

			this.rebuild = function () {
				_this2.appNav.rebuild();
			};

			this.removeChildren = function (node, children, options) {
				_this2.appNav.removeChildren(node, children, options);
			};

			this.resizerShouldNotify = function (element) {
				_this2.appNav.resizerShouldNotify(element);
			};

			this.select = function (item, source) {
				_this2.appNav.select(item, source);
			};

			this.stopResizeNotificationFor = function (target) {
				_this2.appNav.stopResizeNotificationFor(target);
			};
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.appNav.removeEventListener("all-collapsed-changed", this.props.allCollapsedChanged);
			this.appNav.removeEventListener("any-overflowed-changed", this.props.anyOverFlowedChanged);
			this.appNav.removeEventListener("collapse-all-changed", this.props.collapseAllChanged);
			this.appNav.removeEventListener("collapse-opened-changed", this.props.collapseOpenedChanged);
			this.appNav.removeEventListener("overflowed-items-changed", this.props.overflowedItemsChanged);
			this.appNav.removeEventListener("px-app-asset-selected", this.props.pxAppAssetSelected);
			this.appNav.removeEventListener("selected-changed", this.props.selectedChange);
			this.appNav.removeEventListener("selected-meta-changed", this.props.selectedMetaChanged);
			this.appNav.removeEventListener("selected-route-changed", this.props.selectedRouteChanged);
			this.appNav.removeEventListener("some-overflowed-changed", this.props.someOverFlowedChanged);
			this.appNav.removeEventListener("vertical-opened-changed", this.props.verticalOpenedChanged);
			this.appNav.removeEventListener("visible-items-changed", this.props.visibleItemsChanged);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement('px-app-nav', {
				ref: function ref(input) {
					_this3.appNav = input;
				},
				'collapse-all': this.props.collapseAll,
				'collapse-at': this.props.collapseAt + "",
				'collapse-opened': this.props.collapseOpened,
				'collapse-with-icon': this.props.collapseWithIcon,
				'fit-into': this.props.fitInto,
				items: this.props.items,
				keys: this.props.keys,
				selected: this.props.selected,
				'selected-meta': this.props.selectedMeta,
				'selected-route': this.props.selectedRoute,
				vertical: this.props.vertical,
				'vertical-opened': this.props.verticalOpened,
				slot: this.props.slot
			});
		}
	}]);

	return PxAppNav;
}(_react2.default.Component);

PxAppNav.defaultProps = {
	collapseAll: null,
	collapseOpened: null,
	collapseWithIcon: null,
	keys: '{"id":"id","label":"label","children":"children","icon":"icon"}',
	selectedMeta: null,
	vertical: false

};

exports.default = PxAppNav;