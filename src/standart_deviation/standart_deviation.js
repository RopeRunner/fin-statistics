"use strict";
exports.__esModule = true;
var variance_1 = require("../variance/variance");
function standart_deviation(array) {
    return Math.sqrt(variance_1["default"](array));
}
exports["default"] = standart_deviation;
