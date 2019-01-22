import sum from "../sum/sum";

function mean(data_set: Array<number>): number {
  if (data_set.length === 0) return 0;

  return sum(data_set) / data_set.length;
}

export default mean;
