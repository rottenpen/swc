///<reference path='References.ts' />
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var CharacterInfo = /*#__PURE__*/ function() {
    "use strict";
    function CharacterInfo() {
        _class_call_check(this, CharacterInfo);
    }
    CharacterInfo.isDecimalDigit = function isDecimalDigit1(c) {
        return c >= CharacterCodes._0 && c <= CharacterCodes._9;
    };
    CharacterInfo.isHexDigit = function isHexDigit1(c) {
        return isDecimalDigit(c) || c >= CharacterCodes.A && c <= CharacterCodes.F || c >= CharacterCodes.a && c <= CharacterCodes.f;
    };
    CharacterInfo.hexValue = function hexValue(c) {
        Debug.assert(isHexDigit(c));
        return isDecimalDigit(c) ? c - CharacterCodes._0 : c >= CharacterCodes.A && c <= CharacterCodes.F ? c - CharacterCodes.A + 10 : c - CharacterCodes.a + 10;
    };
    return CharacterInfo;
}();
