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
