import mean from "../mean/mean";

/**
 * Function takes as a parameter numerical data set
 * and return variance for this data set
 * @param data_set {Array<number>} - Numerical data set
 */
function variance(data_set: Array<number>): number {
  if (data_set.length === 0) throw new Error("Data set can not be empty");

  const mean_val = mean(data_set);
  let summator: number = 0;

  for (let i = 0; i < data_set.length; i++) {
    summator += Math.pow(data_set[i] - mean_val, 2);
  }

  return summator / (data_set.length - 1);
}

export default variance;
