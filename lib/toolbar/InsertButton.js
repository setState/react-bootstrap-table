'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var insertBtnDefaultClass = 'react-bs-table-add-btn';

var InsertButton = function (_Component) {
  _inherits(InsertButton, _Component);

  function InsertButton() {
    _classCallCheck(this, InsertButton);

    return _possibleConstructorReturn(this, (InsertButton.__proto__ || Object.getPrototypeOf(InsertButton)).apply(this, arguments));
  }

  _createClass(InsertButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          btnGlyphicon = _props.btnGlyphicon,
          btnText = _props.btnText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnGlyphicon', 'btnText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('i', { className: 'glyphicon ' + btnGlyphicon }),
        btnText
      );
      return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
          className: 'btn ' + btnContextual + ' ' + insertBtnDefaultClass + ' ' + className,
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return InsertButton;
}(_react.Component);

InsertButton.propTypes = {
  btnText: _react.PropTypes.string,
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  btnGlyphicon: _react.PropTypes.string
};
InsertButton.defaultProps = {
  btnText: _Const2.default.INSERT_BTN_TEXT,
  btnContextual: 'btn-info',
  className: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-plus'
};

var _default = InsertButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(insertBtnDefaultClass, 'insertBtnDefaultClass', '/Users/neo/WorkSpace/fe/react-bootstrap-table/src/toolbar/InsertButton.js');

  __REACT_HOT_LOADER__.register(InsertButton, 'InsertButton', '/Users/neo/WorkSpace/fe/react-bootstrap-table/src/toolbar/InsertButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/neo/WorkSpace/fe/react-bootstrap-table/src/toolbar/InsertButton.js');
}();

;