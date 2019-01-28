/**
 * Function takes as a parameters min value, max value and is_int
 * and returns you a pseudo random number in range min-max inclusive
 * @param min {number} - Minimal value that you need
 * @param max {number} - Maximum value that ou need
 * @param is_int {boolean} - Indicator, that shows need you integer or not
 */
function random_range(min: number, max: number, is_int: boolean) {
  if (min > max) throw new Error("Min need to be less than max");
  if (min === max) return min;

  let result: number;

  if (is_int === true) {
    result = Math.floor(
      Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
    );
  } else {
    result = Math.random() * (max - min + 1) + min;
  }

  return result;
}

export default random_range;
