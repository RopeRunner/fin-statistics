"use strict";
exports.__esModule = true;
var num_sort_1 = require("../helpers/num_sort");
function median(data_set) {
    var sorted = num_sort_1.num_sort(data_set), res;
    if (sorted.length % 2 === 0) {
        res = (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
    }
    else {
        res = sorted[Math.round(sorted.length / 2) - 1];
    }
    return res;
}
exports["default"] = median;
