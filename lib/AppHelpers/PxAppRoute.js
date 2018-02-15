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

var PxAppRoute = function (_React$Component) {
	_inherits(PxAppRoute, _React$Component);

	function PxAppRoute(props) {
		_classCallCheck(this, PxAppRoute);

		return _possibleConstructorReturn(this, (PxAppRoute.__proto__ || Object.getPrototypeOf(PxAppRoute)).call(this, props));
	}

	_createClass(PxAppRoute, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			(0, _Helpers.attachEventListener)(this.appRoute, "asset-route-changed", this.props.assetRouteChanged);
			(0, _Helpers.attachEventListener)(this.appRoute, "nav-route-changed", this.props.navRouteChanged);
			(0, _Helpers.attachEventListener)(this.appRoute, "route-changed", this.props.routeChanged);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.appRoute.removeEventListener("asset-route-changed", this.props.assetRouteChanged);
			this.appRoute.removeEventListener("nav-route-changed", this.props.navRouteChanged);
			this.appRoute.removeEventListener("route-changed", this.props.routeChanged);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement('px-app-route', {
				ref: function ref(input) {
					_this2.appRoute = input;
				},
				route: this.props.route,
				'nav-route': this.props.navRoute,
				'asset-route': this.props.assetRoute,
				'segment-models-with': this.props.segmentModelsWith,
				'segment-paths-with': this.props.segmentPathsWith,
				'update-asset-route': this.props.updateAssetRoute,
				'update-nav-route': this.props.updateNavRoute,
				'use-hash-as-path': this.props.useHashAsPath
			});
		}
	}]);

	return PxAppRoute;
}(_react2.default.Component);

PxAppRoute.defaultProps = {
	segmentModelsWith: "~",
	segmentPathsWith: "/",
	updateAssetRoute: false,
	updateNavRoute: false,
	useHashAsPath: false
};

exports.default = PxAppRoute;