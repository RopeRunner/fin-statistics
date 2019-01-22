/**
 * Function takes as a parameter list of data (numerical data)
 * and window size
 * and returns list of weighted moving avarages values for this period
 * @param data_set {Array<number>} - Numerical data set
 * @param window_size {number} - Numerical size of window
 */
function linear_weighted_moving_avarage(
  data_set: Array<number>,
  window_size: number
): Array<number> {
  if (data_set.length <= window_size) {
    throw new Error("Lenght of data set need to be longer than window_size");
  } else if (window_size <= 0) {
    throw new Error("Window size can not be less or equal to zero");
  }
  let result: Array<number> = [],
    last_element: number = data_set.length - window_size + 1,
    sub_sum: number = 0,
    divider: number = window_size * (window_size - 1),
    start: number = 0,
    end: number = window_size - 1;

  for (let i = 0; i < last_element; i++) {
    data_set.forEach((el: number, idx: number) => {
      if (idx < start && idx > end) {
        return;
      } else {
        sub_sum += el * (idx + 1);
      }
    });
    result.push((sub_sum * 2) / divider);
    sub_sum = 0;
    start++;
    end++;
  }

  return result;
}

export default linear_weighted_moving_avarage;
