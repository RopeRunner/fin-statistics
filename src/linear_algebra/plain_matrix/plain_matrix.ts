/**
 * Function takes as a parameter horizontal dimension value, vertical dimension value and type
 * which fully describe output matrix
 * and return matrix horizontal_dimension x vertical_dimension fullfiled with values given type
 * @param horizontal_dimension {number} - Number that represent number of rows
 * @param vertical_dimension {number} - Number that represent number of colomns
 * @param type {string} - Numbers that will fullfill the matrix, by default filled with zeros. Could be 'zeros', 'units', 'random'
 */
function plain_matrix(
  horizontal_dimension: number,
  vertical_dimension: number,
  type: string = "zeros"
): Array<Array<number>> {
  if (horizontal_dimension <= 0 || vertical_dimension <= 0) {
    throw new Error("Dimensions can not be less or equal to zero");
  }

  let new_matrix: Array<Array<number>> = [];
  let cb_function: () => number;

  switch (type) {
    case "zeros":
      cb_function = get_zero;
      break;
    case "units":
      cb_function = get_unit;
      break;
    case "random":
    case "":
      cb_function = get_random;
      break;
    default:
      cb_function = get_random;
  }

  for (let i = 0; i < horizontal_dimension; i++) {
    new_matrix.push([]);

    for (let j = 0; j < vertical_dimension; j++) {
      new_matrix[i].push(cb_function());
    }
  }

  return new_matrix;
}

/**
 * Helper fucntions
 * to generate zeros, units, random numbers from 1 to 100
 */

const get_zero = () => 0;
const get_unit = () => 1;
const get_random = () => Math.round(Math.random() * 100);

export default plain_matrix;
