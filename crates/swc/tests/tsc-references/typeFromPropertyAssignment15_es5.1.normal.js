// @noEmit: true
// @allowJs: true
// @checkJs: true
// @Filename: a.js
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var Outer = {};
Outer.Inner = /*#__PURE__*/ function() {
    "use strict";
    function _class() {
        _class_call_check(this, _class);
        this.x = 1;
    }
    var _proto = _class.prototype;
    _proto.m = function m() {};
    return _class;
}();
/** @type {Outer.Inner} */ var inner;
inner.x;
inner.m();
var inno = new Outer.Inner();
inno.x;
inno.m();
