function exponential_distribution(
  exp_parameter: number,
  data_set_len: number
): Array<number> {
  if (data_set_len <= 1) throw new Error("Length need to be greater than 1");
  if (exp_parameter <= 0)
    throw new Error(
      "Exponential parameter need to be positive, non-zero value"
    );

  let result: Array<number> = [];

  for (let i = 0; i < data_set_len; i++) {
    const new_value: number = (-1 / exp_parameter) * Math.log(Math.random());
    result = [...result, new_value];
  }

  return result;
}

export default exponential_distribution;
