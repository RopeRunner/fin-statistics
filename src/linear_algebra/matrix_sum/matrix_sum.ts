/**
 * Take as a parameters
 * two squares matrixes
 * and returns new square matrix
 * which element of result will include summ of corresponding elemnts of params matrixes
 * @param first_data_set {Array<Array<number>>} - First square matrix
 * @param second_data_set {Array<Array<number>>} - Second square matrix
 */
function matrix_sum(
  first_matrix: Array<Array<number>>,
  second_matrix: Array<Array<number>>
): Array<Array<number>> {
  if (first_matrix.length === 0 || second_matrix.length === 0) {
    throw new Error("No empty data_set parts");
  }

  let result: Array<Array<number>> = [];

  for (let i = 0; i < first_matrix.length; i++) {
    if (first_matrix[i].length === 0 || second_matrix[i].length === 0) {
      throw new Error("No empty data_set parts");
    }

    if (first_matrix[i].length !== second_matrix[i].length) {
      throw new Error("Cannot have differnt matrix dimensions");
    }

    result.push([]);

    for (let j = 0; j < first_matrix[i].length; j++) {
      result[i][j] = first_matrix[i][j] + second_matrix[i][j];
    }
  }

  return result;
}

export default matrix_sum;
