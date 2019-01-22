/**
 * Function takes as a parameter numerical data set of positive values
 * and return geometrical avarage value
 * @param data_set {Array<number>} - Numerical positive data set
 */
function geometric_mean(data_set: Array<number>): number {
  if (data_set.length === 0) {
    throw new Error("Data set can not be empty");
  }

  let accum: number = 1;

  for (let i = 0; i < data_set.length; i++) {
    if (data_set[i] <= 0) {
      throw new Error(
        "Data set can not consist of non-positive or zero values"
      );
    }
    accum *= data_set[i];
  }

  return Math.pow(accum, 1 / data_set.length);
}

export default geometric_mean;
