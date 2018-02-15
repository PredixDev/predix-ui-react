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

var PxSteps = function (_React$Component) {
	_inherits(PxSteps, _React$Component);

	function PxSteps(props) {
		_classCallCheck(this, PxSteps);

		return _possibleConstructorReturn(this, (PxSteps.__proto__ || Object.getPrototypeOf(PxSteps)).call(this, props));
	}

	_createClass(PxSteps, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _Helpers.attachEventListener)(this.steps, 'px-steps-tapped', this.props.stepsTapped);

			this.complete = function () {
				_this2.steps.complete();
			};
			this.jumpToStep = function (index) {
				_this2.steps.jumpToStep(index);
			};
			this.next = function () {
				_this2.steps.next();
			};
			this.previous = function () {
				_this2.steps.previous();
			};
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.steps.removeEventListener('px-steps-tapped', this.props.allCollapsedChanged);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement('px-steps', {
				ref: function ref(n) {
					_this3.steps = n;
				},
				items: this.props.items,
				completed: this.props.completed,
				'current-step': this.props.currentStep });
		}
	}]);

	return PxSteps;
}(_react2.default.Component);

PxSteps.defaultProps = {
	items: '[{"id":"1","label":"Basic Information"},{"id":"2","label":"Select Services"},{"id":"3","label":"Billing"},{"id":"4","label":"Review"},{"id":"5","label":"Deploy"}]',
	completed: '["1","2"]',
	currentStep: 0
};

exports.default = PxSteps;