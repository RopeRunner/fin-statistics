"use strict";
exports.__esModule = true;
function min(array) {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < min)
            min = array[i];
    }
    return min;
}
exports["default"] = min;
