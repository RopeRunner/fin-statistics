/**
 * Take as a parameters
 * two 2-dimensional matrixes
 * and returns new 2-dimensional matrix
 * which element of result will include summ of corresponding elemnts of params matrixes
 * @param first_data_set {Array<Array<number>>} - first matrix
 * @param second_data_set {Array<Array<number>>} - second matrix
 */
function matrix_sum(
  first_data_set: Array<Array<number>>,
  second_data_set: Array<Array<number>>
): Array<Array<number>> | Error {
  if (first_data_set.length === 0 || second_data_set.length === 0) {
    return new Error("No empty data_set parts");
  }

  let result: Array<Array<number>> = [];

  for (let i = 0; i < first_data_set.length; i++) {
    if (first_data_set[i].length === 0 || second_data_set[i].length === 0) {
      return new Error("No empty data_set parts");
    }

    if (first_data_set[i].length !== second_data_set[i].length) {
      return new Error("Cannot have differnt matrix dimensions");
    }

    for (let j = 0; j < first_data_set[i].length; j++) {
      result[i][j] = first_data_set[i][j] + second_data_set[i][j];
    }
  }

  return result;
}

export default matrix_sum;
