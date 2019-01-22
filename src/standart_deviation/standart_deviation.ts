import variance from "../variance/variance";

/**
 * Function takes as a parameter numerical data set
 * and return standart deviation for this data set
 * @param data_set {Array<number>} - Numerical data set
 */
function standart_deviation(data_set: Array<number>): number {
  if (data_set.length === 0) {
    throw new Error("Data set can not be empty");
  }
  return Math.sqrt(variance(data_set));
}

export default standart_deviation;
