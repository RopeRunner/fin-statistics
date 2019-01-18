function sum(array: Array<number>): number {
  if (array.length === 0) return 0;

  let sum: number = array[0],
    systematic_arror_compensation: number = 0,
    current_tmp_value: number;

  for (let i = 1; i < array.length; i++) {
    current_tmp_value = sum + array[i];

    if (Math.abs(sum) >= Math.abs(array[i])) {
      systematic_arror_compensation += sum - current_tmp_value + array[i];
    } else {
      systematic_arror_compensation += array[i] - current_tmp_value + sum;
    }

    sum = current_tmp_value;
  }

  return sum + systematic_arror_compensation;
}

export default sum;
