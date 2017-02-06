'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue() {
    var initialValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Queue);

    this.elements = initialValues;
  }

  _createClass(Queue, [{
    key: 'enqueue',
    value: function enqueue(value) {
      this.elements[this.elements.length] = value;
    }
  }, {
    key: 'dequeue',
    value: function dequeue() {
      if (this.elements.length === 0) {
        return null;
      }
      var result = this.elements.slice(0, 1);
      this.elements.splice(0, 1);
      return result;
    }
  }, {
    key: 'front',
    value: function front() {
      if (this.elements.length) {
        return this.elements[0];
      }

      return null;
    }
  }, {
    key: 'back',
    value: function back() {
      if (this.elements.length) {
        return this.elements.slice(-1)[0];
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

  return Queue;
}();

exports.default = Queue;