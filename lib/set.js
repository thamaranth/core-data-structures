'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Set = function () {
  function Set() {
    var initialValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Set);

    this.elements = initialValues;
  }

  _createClass(Set, [{
    key: "add",
    value: function add(value) {
      if (this.elements.indexOf(value) === -1) {
        this.elements[this.elements.length] = value;
        return this.elements;
      }
      return false;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      if (this.elements.length === 0) {
        return true;
      }
      return false;
    }
  }, {
    key: "contains",
    value: function contains(value) {
      if (this.elements.indexOf(value) > 0) {
        return true;
      }
      return false;
    }
  }, {
    key: "remove",
    value: function remove(value) {
      if (this.elements.indexOf(value) > 0) {
        return this.elements.splice(this.elements.indexOf(value), 1);
      }
      return "The value to remove does not exist";
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      this.elements = this.elements.map(func);
      return this.elements;
    }
  }, {
    key: "size",
    value: function size() {
      var count = 0;
      for (var key in this.elements) {
        count++;
      }
      return count;
    }
  }, {
    key: "union",
    value: function union(secondSet) {
      openedArr = this.elements.map(secondSet);
      if (openedArr.indexOf(secondSet) === -1) {
        this.elements[this.elements.length] = secondSet;
        return this.elements;
      }
    }
  }]);

  return Set;
}();

exports.default = Set;