import mean from "../mean/mean";

/**
 * Function takes as a parameters 2 data sets
 * and return covariance coefficient between them
 * @param fdata_set {Array<number>} - Numeric data set
 * @param sdata_set {Arry<number>} - Numeric data set
 */
function covariance(
  fdata_set: Array<number>,
  sdata_set: Array<number>
): number {
  if (fdata_set.length === 0 || sdata_set.length === 0)
    throw new Error("Data sets can not be empty");

  if (fdata_set.length !== sdata_set.length)
    throw new Error("Data sets need to be same length");

  let summator: number = 0,
    first_mean: number = mean(fdata_set),
    second_mean: number = mean(sdata_set);

  for (let i = 0; i < fdata_set.length; i++) {
    summator += (fdata_set[i] - first_mean) * (sdata_set[i] - second_mean);
  }

  return summator / (fdata_set.length - 1);
}

export default covariance;
