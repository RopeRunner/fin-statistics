/**
 * Takes 2 square matrixes
 * and return new square matrix
 * which include at corresponding postitions multiplication
 * of elements from parameters matrixes
 * @param first_matrix {Array<Array<number>>} - first square matrix
 * @param second_matrix {Array<Array<number>>} - second square matrix
 */
function square_matrix_multiplication(
  first_matrix: Array<Array<number>>,
  second_matrix: Array<Array<number>>
): Array<Array<number>> | Error {
  let result: Array<Array<number>> = [];

  for (let i = 0; i < first_matrix.length; i++) {
    if (first_matrix[i].length === 0 || second_matrix[i].length === 0) {
      return new Error("No empty data_set parts");
    }

    if (first_matrix[i].length !== second_matrix[i].length) {
      return new Error("Cannot have differnt matrix dimensions");
    }

    result.push([]);

    for (let j = 0; j < first_matrix[i].length; j++) {
      result[i][j] = first_matrix[i][j] * second_matrix[i][j];
    }
  }

  return result;
}

export default square_matrix_multiplication;
