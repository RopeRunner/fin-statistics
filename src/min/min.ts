/**
 * Function takes as parameter numerical data set
 * and returns minimal value form these data set
 * @param data_set {Array<number>} - Numerical data set
 */
function min(data_set: Array<number>): number {
  if (data_set.length === 0) {
    throw new Error("Data set can not be empty");
  }

  let min = data_set[0];

  for (let i = 1; i < data_set.length; i++) {
    if (data_set[i] < min) min = data_set[i];
  }

  return min;
}

export default min;
