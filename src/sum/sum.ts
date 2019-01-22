function sum(data_set: Array<number>): number {
  if (data_set.length === 0) return 0;

  let sum: number = data_set[0],
    systematic_arror_compensation: number = 0,
    current_tmp_value: number;

  for (let i = 1; i < data_set.length; i++) {
    current_tmp_value = sum + data_set[i];

    if (Math.abs(sum) >= Math.abs(data_set[i])) {
      systematic_arror_compensation += sum - current_tmp_value + data_set[i];
    } else {
      systematic_arror_compensation += data_set[i] - current_tmp_value + sum;
    }

    sum = current_tmp_value;
  }

  return sum + systematic_arror_compensation;
}

export default sum;
