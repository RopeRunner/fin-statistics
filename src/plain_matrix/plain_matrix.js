"use strict";
exports.__esModule = true;
function plain_matrix(n, k, type) {
    if (type === void 0) { type = "zeros"; }
    var new_matrix = [];
    var cb_function;
    switch (type) {
        case "zeros":
            cb_function = get_zero;
            break;
        case "units":
            cb_function = get_unit;
            break;
        case "random":
        case "":
            cb_function = get_random;
            break;
        default:
            cb_function = get_random;
    }
    for (var i = 0; i < n; i++) {
        new_matrix.push([]);
        for (var j = 0; j < k; j++) {
            new_matrix[i].push(cb_function());
        }
    }
    return new_matrix;
}
/**
 * Helper fucntions
 * to generate zeros, units, random numbers from 1 to 100
 */
var get_zero = function () { return 0; };
var get_unit = function () { return 1; };
var get_random = function () { return Math.round(Math.random() * 100); };
exports["default"] = plain_matrix;
