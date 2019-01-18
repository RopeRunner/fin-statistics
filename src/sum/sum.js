"use strict";
exports.__esModule = true;
function sum(array) {
    if (array.length === 0)
        return 0;
    var sum = array[0], systematic_arror_compensation = 0, current_tmp_value;
    for (var i = 1; i < array.length; i++) {
        current_tmp_value = sum + array[i];
        if (Math.abs(sum) >= Math.abs(array[i])) {
            systematic_arror_compensation += sum - current_tmp_value + array[i];
        }
        else {
            systematic_arror_compensation += array[i] - current_tmp_value + sum;
        }
        sum = current_tmp_value;
    }
    return sum + systematic_arror_compensation;
}
exports["default"] = sum;
