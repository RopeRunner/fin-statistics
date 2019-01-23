import { mean } from "../../..";
import standart_deviation from "../standart_deviation/standart_deviation";

function skewness(data_set: Array<number>): number {
  if (data_set.length <= 1)
    throw new Error("Data set need to have more than 1 data point");

  const mean_value: number = mean(data_set),
    std_quibic: number = Math.pow(standart_deviation(data_set), 3);

  let sub_sum: number = 0,
    third_momentum: number;

  for (let i = 0; i < data_set.length; i++) {
    sub_sum += Math.pow(data_set[i] - mean_value, 3);
  }

  third_momentum = sub_sum / data_set.length;

  return third_momentum / std_quibic;
}

export default skewness;
