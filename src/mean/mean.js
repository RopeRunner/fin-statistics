"use strict";
exports.__esModule = true;
var sum_1 = require("../sum/sum");
function mean(array) {
    if (array.length === 0)
        return 0;
    return sum_1["default"](array) / array.length;
}
exports["default"] = mean;
