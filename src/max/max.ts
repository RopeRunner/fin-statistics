function max(data_set: Array<number>): number {
  if (data_set.length === 0) throw new Error("Data set can not be empty");
  let max = data_set[0];

  for (let i = 1; i < data_set.length; i++) {
    if (data_set[i] > max) max = data_set[i];
  }

  return max;
}

export default max;
