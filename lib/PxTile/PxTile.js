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

var PxTile = function (_React$Component) {
	_inherits(PxTile, _React$Component);

	function PxTile(props) {
		_classCallCheck(this, PxTile);

		return _possibleConstructorReturn(this, (PxTile.__proto__ || Object.getPrototypeOf(PxTile)).call(this, props));
	}

	_createClass(PxTile, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			(0, _Helpers.attachEventListener)(this.pxTile, "px-tile-action-tapped", this.props.pxTileActionTapped);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.pxTile.removeEventListener("px-tile-action-tapped", this.props.pxTileActionTapped);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement('px-tile', {
				ref: function ref(input) {
					_this2.pxTile = input;
				},
				'action-buttons': this.props.actionButtons,
				description: this.props.description,
				hoverable: this.props.hoverable,
				'main-title': this.props.mainTitle,
				'overlay-description': this.props.overlayDescription,
				subtitle: this.props.subtitle
			});
		}
	}]);

	return PxTile;
}(_react2.default.Component);

PxTile.defaultProps = {
	actionButtons: '{}',
	description: "",
	hoverable: null,
	mainTitle: "",
	overlayDescription: "",
	subtitle: ""
};

exports.default = PxTile;