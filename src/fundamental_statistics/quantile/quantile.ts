import { num_sort } from "../../helpers/num_sort/num_sort";

function quantile(data_set: Array<number>, alpha: number): number {
  if (data_set.length <= 1)
    throw new Error("Data set need to have more than 1 element");
  if (alpha < 0 || alpha > 1) throw new Error("Aplha: {0 <=  alpha <= 1}");

  const sorted_list: Array<number> = num_sort(data_set);
  let result: number;

  if (alpha === 0) return sorted_list[0];
  if (alpha === 1) return sorted_list[sorted_list.length - 1];

  if (sorted_list.length % 2 === 0) {
    const start: number = Math.floor(alpha * sorted_list.length);
    result = (sorted_list[start] + sorted_list[start + 1]) / 2;
  } else {
    result = sorted_list[Math.ceil(sorted_list.length * alpha)];
  }

  return result;
}

export default quantile;
