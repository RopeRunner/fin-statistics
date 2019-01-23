function transposition_square(
  matrix: Array<Array<number>>
): Array<Array<number>> {
  if (matrix.length === 0) throw new Error("Matrix can not be empty");
  const dim = matrix.length;

  for (let i = 0; i < dim; i++) {
    if (matrix[i].length !== dim) throw new Error("Matrix need to be square");
  }

  let tmp: number;

  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < i; j++) {
      tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  return matrix;
}

export default transposition_square;
