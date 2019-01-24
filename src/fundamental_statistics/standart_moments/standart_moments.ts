import mean from "../mean/mean";
import standart_deviation from "../standart_deviation/standart_deviation";

function standart_moments(data_set: Array<number>, order: number): number {
  if (data_set.length <= 1)
    throw new Error("Data set need to have more than 1 data point");
  if (order === 0)
    throw new Error("Order need to be non-zero, zero-order have no sense");

  const mean_value: number = mean(data_set),
    std_kth: number = Math.pow(standart_deviation(data_set), order);

  let sub_sum: number = 0,
    kth_momentum: number;

  for (let i = 0; i < data_set.length; i++) {
    sub_sum += Math.pow(data_set[i] - mean_value, order);
  }

  kth_momentum = sub_sum / data_set.length;

  return kth_momentum / std_kth;
}

export default standart_moments;
