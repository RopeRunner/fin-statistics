/**
 * Function takes as a parameter numerical data set and exponent value
 * and return you exponensial mean value
 * @param data_set {Array<number>} - Numerical data set
 * @param exponent_value {number} - Exponent value, represent the order of your mean
 */
function exp_mean(data_set: Array<number>, exponent_value: number): number {
  if (data_set.length === 0) throw new Error("Data set can not be empty");

  if (exponent_value === 0) throw new Error("Exponent value can not be zero");
  if (exponent_value < 2)
    throw new Error("If exponent value less than 2, better use mean function");

  let summator: number = 0;

  for (let i = 0; i < data_set.length; i++) {
    summator += Math.pow(data_set[i], exponent_value);
  }

  return Math.pow(summator / data_set.length, 1 / exponent_value);
}

export default exp_mean;
