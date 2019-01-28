import { num_sort } from "../../helpers/num_sort/num_sort";
/**
 * Function takes as a parameter numerical data set
 * and return difference between maximum and minimum in current data set
 * @param data_set {Array<number>} - Numerical data set
 */
function scope_of_variation(data_set: Array<number>): number {
  if (data_set.length === 0) throw new Error("Data set can not be empty");

  const sorted: Array<number> = num_sort(data_set);

  return sorted[sorted.length - 1] - sorted[0];
}

export default scope_of_variation;
