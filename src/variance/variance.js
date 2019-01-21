"use strict";
exports.__esModule = true;
var mean_1 = require("../mean/mean");
function variance(array) {
    if (array.length === 0)
        throw new Error("Data set can not be empty");
    var mean_val = mean_1["default"](array);
    var tmp_sqr_val = 0;
    for (var i = 0; i < array.length; i++) {
        tmp_sqr_val += Math.pow(array[i], 2);
    }
    return tmp_sqr_val / array.length - Math.pow(mean_val, 2);
}
exports["default"] = variance;
