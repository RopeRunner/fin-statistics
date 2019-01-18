import mean from "../mean/mean";

function variance(array: Array<number>): number {
  if (array.length === 0) throw new Error("Data set can not be empty");

  const mean_val = mean(array);
  let tmp_sqr_val: number = 0;

  for (let i = 0; i < array.length; i++) {
    tmp_sqr_val += Math.pow(array[i], 2);
  }

  return tmp_sqr_val / array.length - Math.pow(mean_val, 2);
}

export default variance;
