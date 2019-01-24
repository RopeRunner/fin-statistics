/**
 * Function takes as a parameters alpha and length of data set you want to get
 * return data set of gamma distributed values
 * @param alpha {number} - Parameter of distribution, 0 < alpha < 1
 * @param data_set_len {number} - Data set length
 */
function gamma_distribution(
  alpha: number,
  data_set_len: number
): Array<number> {
  if (alpha <= 0 || alpha >= 1)
    throw new Error(
      "Alpha and beta parameters need to be positive, non-zero values"
    );
  if (data_set_len <= 1)
    throw new Error("Data set length need to be greater than 1");

  let result: Array<number> = [];

  for (let i = 0; i < data_set_len; i++) {
    let checked: boolean = false,
      s_1: number = 0,
      s_2: number = 0,
      sum: number = 0;
    while (!checked) {
      s_1 = Math.pow(Math.random(), 1 / alpha);
      s_2 = Math.pow(Math.random(), 1 / (1 - alpha));
      sum = s_1 + s_2;
      sum > 1 ? (checked = false) : (checked = true);
    }
    let new_value: number = (s_1 / sum) * (-1 * Math.log(Math.random()));

    result = [...result, new_value];
  }

  return result;
}

export default gamma_distribution;
