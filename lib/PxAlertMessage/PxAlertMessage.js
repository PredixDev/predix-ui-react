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

var PxAlertMessage = function (_React$Component) {
	_inherits(PxAlertMessage, _React$Component);

	function PxAlertMessage(props) {
		_classCallCheck(this, PxAlertMessage);

		return _possibleConstructorReturn(this, (PxAlertMessage.__proto__ || Object.getPrototypeOf(PxAlertMessage)).call(this, props));
	}

	_createClass(PxAlertMessage, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _Helpers.attachEventListener)(this.alertMessage, 'app-localize-resources-error', this.props.localizeResourcesError);
			(0, _Helpers.attachEventListener)(this.alertMessage, 'app-localize-resources-loaded', this.props.localizeResourcesLoaded);
			(0, _Helpers.attachEventListener)(this.alertMessage, 'expanded-changed', this.props.expandedChanged);
			(0, _Helpers.attachEventListener)(this.alertMessage, 'px-alert-message-action-auto-dismissed', this.props.messageAutoDismissed);
			(0, _Helpers.attachEventListener)(this.alertMessage, 'px-alert-message-action-triggered', this.props.messageActionTriggered);
			(0, _Helpers.attachEventListener)(this.alertMessage, 'px-alert-message-hidden', this.props.messageHidden);

			this.setAutoDismiss = function (dismissAfter) {
				_this2.alertMessage.setAutoDismiss(dismissAfter);
			};
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.alertMessage.removeEventListener('app-localize-resources-error', this.props.localizeResourcesError);
			this.alertMessage.removeEventListener('app-localize-resources-loaded', this.props.localizeResourcesLoaded);
			this.alertMessage.removeEventListener('expanded-changed', this.props.expandedChanged);
			this.alertMessage.removeEventListener('px-alert-message-action-auto-dismissed', this.props.messageAutoDismissed);
			this.alertMessage.removeEventListener('px-alert-message-action-triggered', this.props.messageActionTriggered);
			this.alertMessage.removeEventListener('px-alert-message-hidden', this.props.messageHidden);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement('px-alert-message', {
				ref: function ref(n) {
					_this3.alertMessage = n;
				},
				language: this.props.language,
				'hide-badge': this.props.hideBadge,
				type: this.props.type,
				action: this.props.action,
				'message-title': this.props.title,
				message: this.props.message,
				'auto-dismiss': this.props.autoDismiss });
		}
	}]);

	return PxAlertMessage;
}(_react2.default.Component);

PxAlertMessage.defaultProps = {
	type: "important",
	hideBadge: null,
	language: "en",
	action: "dismiss",
	title: "Well done!",
	message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt eros et felis elementum, non scelerisque mi consequat. Aenean placerat, lorem vel tempor congue, lorem erat vehicula erat, vel iaculis tellus nulla ut felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque in nisi.",
	autoDismiss: 0

};

exports.default = PxAlertMessage;