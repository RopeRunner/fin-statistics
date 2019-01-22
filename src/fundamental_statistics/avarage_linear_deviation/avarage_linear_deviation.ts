import mean from "../mean/mean";

/**
 * Function takes as a parameter numerical data set
 * and return avarage linear deviation
 * @param data_set {Array<number>} - Numerical data set
 */
function avarage_linear_deviation(data_set: Array<number>): number {
  if (data_set.length === 0) throw new Error("Data set can not be empty");

  const mean_value: number = mean(data_set);
  let summator: number = 0;

  for (let i = 0; i < data_set.length; i++) {
    summator += Math.abs(data_set[i] - mean_value);
  }

  return summator / data_set.length;
}

export default avarage_linear_deviation;
