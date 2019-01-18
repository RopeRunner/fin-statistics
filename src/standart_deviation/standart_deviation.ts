import variance from "../variance/variance";

function standart_deviation(array: Array<number>): number {
  return Math.sqrt(variance(array));
}

export default standart_deviation;
