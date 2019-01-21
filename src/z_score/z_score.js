"use strict";
exports.__esModule = true;
function z_score(data_set, mean, standart_deviation) {
    if (data_set.length === 0)
        throw new Error("data_set @param{Array<number>} can not be empty");
    var z_score_result = [];
    for (var i = 0; i < data_set.length; i++) {
        var current_z = (data_set[i] - mean) / standart_deviation;
        z_score_result = z_score_result.concat([current_z]);
    }
    return z_score_result;
}
exports["default"] = z_score;
