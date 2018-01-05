'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jroll = require('jroll');

var _jroll2 = _interopRequireDefault(_jroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyJRoll = function (_React$Component) {
    _inherits(MyJRoll, _React$Component);
    
    function MyJRoll(props) {
        _classCallCheck(this, MyJRoll);
        
        var _this = _possibleConstructorReturn(this, (MyJRoll.__proto__ || Object.getPrototypeOf(MyJRoll)).call(this, props));
        
        _this.jroll = null;
        return _this;
    }
    
    _createClass(MyJRoll, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;
            
            var wrappers = this.props.ID || 'wrappers';
            this.jroll = new _jroll2.default('#' + wrappers);
            this.jroll.refresh();
            this.jroll.on('scrollEnd', function () {
                _this2.jroll.refresh();
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this3 = this;
            
            setTimeout(function () {
                if (!!_this3.jroll) {
                    _this3.jroll.refresh();
                }
            }, 400);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.jroll.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                height = _props.height,
                maxHeight = _props.maxHeight,
                bgColor = _props.bgColor;
            
            var _style = void 0;
            if (!maxHeight) {
                _style = { height: height ? height : '100%', background: bgColor ? bgColor : '#f6f6f6' };
            } else {
                _style = { maxHeight: maxHeight, background: bgColor ? bgColor : '#f6f6f6' };
            }
            return _react2.default.createElement(
                'div',
                {
                    id: this.props.ID ? this.props.ID : 'wrappers',
                    style: _style
                },
                _react2.default.createElement(
                    'ul',
                    {
                        className: 'clearfix',
                        id: 'scroller'
                    },
                    this.props.children
                )
            );
        }
    }]);
    
    return MyJRoll;
}(_react2.default.Component);

exports.default = MyJRoll;