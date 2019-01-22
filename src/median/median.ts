import { num_sort } from "../helpers/num_sort";

function median(data_set: Array<number>): number {
  if (data_set.length === 0) {
    throw new Error("Data set can not be empty");
  }
  let sorted: Array<number> = num_sort(data_set),
    res: number;

  if (sorted.length % 2 === 0) {
    res = (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  } else {
    res = sorted[Math.round(sorted.length / 2) - 1];
  }

  return res;
}

export default median;
