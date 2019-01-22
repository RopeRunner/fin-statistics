import { sum } from "../../../..";

/**
 * Function takes as a parameter numerical data set, smoothing period and smoothing coefficient
 * return a numerical data set, each element represent the ema value due to smoothing period and smoothing coefficient
 * @param data_set {Array<number>} - Numerical data set
 * @param window_size {number} - Number, that represent smoothing period
 * @param alpha {number} - Number, that represent coefficient of smoothing, by default is 2 / (data_set.length + 1)
 */
function ema(
  data_set: Array<number>,
  window_size: number,
  alpha?: number
): Array<number> {
  if (data_set.length === 0) {
    throw new Error("Data set can not be empty");
  }
  if (data_set.length < window_size) {
    throw new Error(
      "Window size (smoothing period) can not be less that data set size"
    );
  }
  if (window_size <= 0) {
    throw new Error(
      "Window size (smoothing period) can not be less or equal to zero"
    );
  }
  if (alpha === undefined) {
    alpha = 2 / (window_size + 1);
  } else {
    if (alpha <= 0 || alpha >= 1) {
      throw new Error("Alpha need to be between 0 and 1 = (0, 1)");
    }
  }

  let previous_ema: number = calculate_first_value(
      data_set.slice(0, window_size),
      window_size
    ),
    last_element: number = data_set.length - window_size + 1,
    end: number = window_size,
    result: Array<number> = [];

  result = [...result, previous_ema];

  console.log(data_set.slice(0, window_size));

  for (let i = 1; i < last_element; i++) {
    let current_ema: number =
      alpha * data_set[end] + (1 - alpha) * previous_ema;

    previous_ema = current_ema;
    result = [...result, previous_ema];
    end++;
  }

  return result;
}

function calculate_first_value(
  data_set: Array<number>,
  window_size: number
): number {
  return sum(data_set) / window_size;
}

export default ema;
