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

var PxModal = function (_React$Component) {
	_inherits(PxModal, _React$Component);

	function PxModal(props) {
		_classCallCheck(this, PxModal);

		return _possibleConstructorReturn(this, (PxModal.__proto__ || Object.getPrototypeOf(PxModal)).call(this, props));
	}

	_createClass(PxModal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _Helpers.attachEventListener)(this.modal, 'horizontal-offset-changed', this.props.horizontalOffsetChanged);
			(0, _Helpers.attachEventListener)(this.modal, 'vertical-offset-changed', this.props.verticalOffsetChanged);
			(0, _Helpers.attachEventListener)(this.modal, 'px-modal-accepted', this.props.modalAccepted);
			(0, _Helpers.attachEventListener)(this.modal, 'px-modal-dismissed', this.props.modalDismissed);
			(0, _Helpers.attachEventListener)(this.modal, 'px-modal-rejected', this.props.modalRejected);
			(0, _Helpers.attachEventListener)(this.modal, 'opened-changed', this.props.openChanged);

			this.center = function () {
				_this2.modal.center();
			};
			this.constrain = function () {
				_this2.modal.constrain();
			};
			this.fit = function () {
				_this2.modal.fit();
			};
			this.position = function () {
				_this2.modal.position();
			};
			this.refit = function () {
				_this2.modal.refit();
			};
			this.resetFit = function () {
				_this2.modal.resetFit();
			};
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.modal.removeEventListener('horizontal-offset-changed', this.props.horizontalOffsetChanged);
			this.modal.removeEventListener('vertical-offset-changed', this.props.verticalOffsetChanged);
			this.modal.removeEventListener('px-modal-accepted', this.props.modalAccepted);
			this.modal.removeEventListener('px-modal-dismissed', this.props.modalDismissed);
			this.modal.removeEventListener('px-modal-rejected', this.props.modalRejected);
			this.modal.removeEventListener('opened-changed', this.props.openChanged);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('px-modal', {
					ref: function ref(n) {
						_this3.modal = n;
					},
					'header-text': this.props.headerText,
					'body-text': this.props.bodyText,
					'accept-text': this.props.acceptText,
					'reject-text': this.props.rejectText,
					'auto-fit-on-attach': this.props.autoFitOnAttach,
					'disable-close-on-escape': this.props.disableCloseOnEscape,
					'dynamic-align': this.props.dynamicAlign,
					'fill-container': this.props.fillContainer,
					'fit-into': this.props.fitInto,
					'horizontal-align': this.props.horizontalAlign,
					'horizontal-offset': this.props.horizontalOffset,
					'no-overlap': this.props.noOverlap,
					'sizing-target': this.props.sizingTarget,
					'vertical-align': this.props.verticalAlign,
					'vertical-offset': this.props.verticalOffset,
					opened: this.props.opened === true ? true : null
				})
			);
		}
	}]);

	return PxModal;
}(_react2.default.Component);

PxModal.defaultProps = {
	opened: true,
	headerText: "Confirm delete",
	bodyText: "Do you want to delete this record? The record will be deleted permanently.",
	acceptText: "Permanently Delete Record",
	rejectText: "Cancel",
	autoFitOnAttach: null,
	disableCloseOnEscape: null,
	dynamicAlign: null,
	fillContainer: null,
	fitInto: null,
	horizontalAlign: null,
	horizontalOffset: 0,
	noOverlap: null,
	sizingTarget: null,
	verticalAlign: null,
	verticalOffset: 0
};

exports.default = PxModal;