function z_score(
  data_set: Array<number>,
  mean: number,
  standart_deviation: number
): Array<number> {
  if (data_set.length === 0) throw new Error("Data set can not be empty");

  let z_score_result: Array<number> = [];

  for (let i = 0; i < data_set.length; i++) {
    const current_z: number = (data_set[i] - mean) / standart_deviation;
    z_score_result = [...z_score_result, current_z];
  }

  return z_score_result;
}

export default z_score;
