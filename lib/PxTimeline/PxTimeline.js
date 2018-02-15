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

var PxTimeline = function (_React$Component) {
	_inherits(PxTimeline, _React$Component);

	function PxTimeline(props) {
		_classCallCheck(this, PxTimeline);

		return _possibleConstructorReturn(this, (PxTimeline.__proto__ || Object.getPrototypeOf(PxTimeline)).call(this, props));
	}

	_createClass(PxTimeline, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _Helpers.attachEventListener)(this.pxTimeline, "app-localize-resources-error", this.props.appLocalizeResourcesError);
			(0, _Helpers.attachEventListener)(this.pxTimeline, "app-localize-resources-loaded", this.props.appLocalizeResourcesLoaded);

			this.loadResources = function (path, language, merge) {
				_this2.pxTimeline.loadResources(path, language, merge);
			};
		}
	}, {
		key: 'componentDidUnmount',
		value: function componentDidUnmount() {
			this.pxTimeline.removeEventListener("app-localize-resources-error", this.props.appLocalizeResourcesError);
			this.pxTimeline.removeEventListener("app-localize-resources-loaded", this.props.appLocalizeResourcesLoaded);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement('px-timeline', {
				ref: function ref(input) {
					_this3.pxTimeline = input;
				},
				'bubble-event': this.props.bubbleEvent,
				'compact-editor-info': this.compactEditorInfo,
				'date-format': this.dateFormat,
				enhanced: this.enhanced,
				formats: this.formats,
				language: this.language,
				'node-count': this.nodeCount,
				resources: this.props.resources,
				'show-time-groups': this.props.showTimeGroups,
				'start-date': this.props.startDate,
				'timeline-data': this.props.timelineData,
				'time-zone': this.props.timeZone,
				'use-key-if-missing': this.props.useKeyIfMissing
			});
		}
	}]);

	return PxTimeline;
}(_react2.default.Component);

PxTimeline.defaultProps = {
	bubbleEvent: null,
	compactEditorInfo: null,
	formats: "{}",
	language: "en",
	resources: '{"en":{"TODAY":"TODAY","THIS WEEK":"THIS WEEK","THIS MONTH":"THIS MONTH","THIS YEAR":"THIS YEAR","LAST YEAR":"LAST YEAR"}}',
	useKeyIfMissing: true
};

exports.default = PxTimeline;