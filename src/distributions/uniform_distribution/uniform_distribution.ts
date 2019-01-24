/**
 * Function takes as a parameters minimal value, maximum value and data set length
 * return uniformal distribuited daa set
 * @param min {number} - Minimal value you want
 * @param max {number} - Maximum value you want
 * @param data_set_len {number} - Length of data set
 */
function uniform_distribution(
  min: number,
  max: number,
  data_set_len: number
): Array<number> {
  if (max < min) throw new Error("Max need to be greater than min");

  let uniformed_data_set: Array<number> = [];

  for (let i = 0; i < data_set_len; i++) {
    const new_value: number = min + Math.random() * (max - min);
    uniformed_data_set = [...uniformed_data_set, new_value];
  }

  return uniformed_data_set;
}

export default uniform_distribution;
