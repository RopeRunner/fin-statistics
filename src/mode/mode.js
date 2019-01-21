"use strict";
exports.__esModule = true;
var ICount = /** @class */ (function () {
    function ICount(value, number_of_times) {
        this.value = value;
        this.number_of_times = number_of_times;
    }
    ICount.prototype.set_number_of_times = function () {
        this.number_of_times += this.number_of_times;
    };
    return ICount;
}());
function mode(data_set) {
    if (data_set.length === 0)
        throw new Error("Data set can not be empty");
    var indexing = [], result = [];
    var _loop_1 = function (i) {
        var bool = indexing.findIndex(function (el, index) {
            if (el.value === data_set[i]) {
                return index;
            }
        });
        if (bool !== -1) {
            indexing.push(new ICount(data_set[i], 1));
        }
        else {
            indexing[bool].set_number_of_times();
        }
    };
    for (var i = 0; i < data_set.length; i++) {
        _loop_1(i);
    }
}
exports["default"] = mode;
