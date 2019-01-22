import covariance from "../covariance/covariance";
import standart_deviation from "../standart_deviation/standart_deviation";

/**
 * Function takes as a parameters two numerical data sets
 * return correlation coefficient between 2 data sets
 * @param fdata_set {Array<number>} - Numerical data set
 * @param sdata_set {Array<number>} - Numerical data set
 */
function correlation(
  fdata_set: Array<number>,
  sdata_set: Array<number>
): number {
  if (fdata_set.length === 0 || sdata_set.length === 0)
    throw new Error("Data sets can not be empty");

  if (fdata_set.length !== sdata_set.length)
    throw new Error("Data sets need to have equal lengths");
  const cov: number = covariance(fdata_set, sdata_set),
    first_std: number = standart_deviation(fdata_set),
    second_std: number = standart_deviation(sdata_set);

  return cov / (first_std * second_std);
}

export default correlation;
