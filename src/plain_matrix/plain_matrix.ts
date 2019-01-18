function plain_matrix(
  n: number,
  k: number,
  type: string = "zeros"
): Array<Array<any>> {
  let new_matrix: Array<Array<any>> = [];
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

  for (let i = 0; i < n; i++) {
    new_matrix.push([]);
    for (let j = 0; j < k; j++) {
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
