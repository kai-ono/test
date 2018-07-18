(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.script = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var REF = {
    load: 'loaded'
  };

  var Test = function () {
    function Test(args) {
      _classCallCheck(this, Test);

      this.args = typeof args !== 'undefined' ? args : {};
      this.node = typeof this.args.elm !== 'undefined' ? this.args.elm : document.querySelectorAll('.' + REF.clss);
      this.Init();
    }

    _createClass(Test, [{
      key: 'Init',
      value: function Init() {}
    }]);

    return Test;
  }();

  module.exports = Test;
  if (typeof window !== 'undefined') {
    !window.Test && (window.Test = Test);
  }
});