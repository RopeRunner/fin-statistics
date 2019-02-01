import frequency from "../frequency/frequency";

function relative_frequency(data_set: Array<number>, target: number) {
  const fr: number = frequency(data_set, target);

  return fr / data_set.length;
}
