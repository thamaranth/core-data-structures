'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PriorityQueue = function () {
  function PriorityQueue() {
    var initialValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, PriorityQueue);

    this.elements = initialValues;
  }

  _createClass(PriorityQueue, [{
    key: 'enqueue',
    value: function enqueue(value, priority) {
      this.elements[this.elements.length] = [value, priority];
    }
  }, {
    key: 'front',
    value: function front() {
      if (this.elements.length) {
        var highest = this.elements[0];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var pair = _step.value;

            if (pair[1] > highest[1]) {
              highest = pair;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return highest;
      }
      return null;
    }
  }, {
    key: 'back',
    value: function back() {
      if (this.elements.length) {
        var lowest = this.elements[0];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var pair = _step2.value;

            if (pair[1] < lowest[1]) {
              lowest = pair;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return lowest;
      }
      return null;
    }
  }, {
    key: 'dequeue',
    value: function dequeue() {
      if (this.elements.length) {
        var highest = this.elements[0];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var pair = _step3.value;

            if (pair[1] > highest[1]) {
              highest = pair;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        this.elements.splice(this.elements.indexOf(highest), 1);
        return highest;
      }
      return null;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      if (this.elements.length) {
        return false;
      }
      return true;
    }
  }, {
    key: 'length',
    value: function length() {
      var count = 0;
      for (var key in this.elements) {
        count++;
      }
      return count;
    }
  }]);

  return PriorityQueue;
}();

exports.default = PriorityQueue;