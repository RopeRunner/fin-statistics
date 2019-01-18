import sum from "../sum/sum";

function mean(array: Array<number>): number {
  if (array.length === 0) return 0;

  return sum(array) / array.length;
}

export default mean;
