'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var ComponentListener = function ComponentListener(props) {
  var _React$useState = React.useState({
    status: "mouse-up"
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      eventState = _React$useState2[0],
      setEventState = _React$useState2[1];

  var children = props.children,
      className = props.className,
      id = props.id,
      _onClick = props.onClick,
      _onMouseDown = props.onMouseDown,
      onMouseMove = props.onMouseMove,
      onMouseUp = props.onMouseUp;
  React.useEffect(function () {
    var _onMouseMove;

    var _onMouseUp;

    if (onMouseMove && onMouseUp) {
      _onMouseMove = function _onMouseMove(e) {
        return onMouseMove({
          e: e,
          id: id,
          eventState: eventState,
          setEventState: setEventState
        });
      };

      _onMouseUp = function _onMouseUp(e) {
        return onMouseUp({
          e: e,
          id: id,
          eventState: eventState,
          setEventState: setEventState
        });
      };

      document.addEventListener("mousemove", _onMouseMove);
      document.addEventListener("mouseup", _onMouseUp);
    }

    return function () {
      if (_onMouseMove && _onMouseUp) {
        document.removeEventListener("mousemove", _onMouseMove);
        document.removeEventListener("mouseup", _onMouseUp);
      }
    };
  }, [eventState, id, onMouseMove, onMouseUp]);
  return React.createElement("div", {
    onClick: function onClick(e) {
      return _onClick ? _onClick({
        e: e,
        id: id,
        eventState: eventState,
        setEventState: setEventState
      }) : function () {};
    },
    onMouseDown: function onMouseDown(e) {
      return _onMouseDown ? _onMouseDown({
        e: e,
        id: id,
        eventState: eventState,
        setEventState: setEventState
      }) : function () {};
    },
    id: id,
    className: className
  }, children);
};

module.exports = ComponentListener;
