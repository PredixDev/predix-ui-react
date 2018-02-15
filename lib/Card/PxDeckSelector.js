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

var PxDeckSelector = function (_React$Component) {
	_inherits(PxDeckSelector, _React$Component);

	function PxDeckSelector(props) {
		_classCallCheck(this, PxDeckSelector);

		return _possibleConstructorReturn(this, (PxDeckSelector.__proto__ || Object.getPrototypeOf(PxDeckSelector)).call(this, props));
	}

	_createClass(PxDeckSelector, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			(0, _Helpers.attachEventListener)('selected-deck-changed', this.props.selectedDeckChanged);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.deckSelector.removeEventListener('selected-deck-changed');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement('px-deck-selector', {
				ref: function ref(n) {
					_this2.deckSelector = n;
				},
				decks: this.props.decks });
		}
	}]);

	return PxDeckSelector;
}(_react2.default.Component);

PxDeckSelector.defaultProps = {
	decks: '[{"name":"First Deck","url":"/deck1"},{"name":"Second Deck","url":"/deck2"},{"name":"Third Deck","url":"/deck3"}]'
};

exports.default = PxDeckSelector;