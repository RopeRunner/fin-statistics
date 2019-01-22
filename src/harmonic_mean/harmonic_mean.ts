/**
 * Function take array of numbers as an input
 * and return harmonic mean value {number}
 * @param data_set {Array<number>} - Numerical data set
 */
function harmonic_mean(data_set: Array<number>): number {
  if (data_set.length === 0) throw new Error("Data set can not be empty");

  let sum: number = 0;

  for (let i = 0; i < data_set.length; i++) {
    sum += 1 / data_set[i];
  }

  return data_set.length / sum;
}

export default harmonic_mean;
