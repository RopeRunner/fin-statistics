/**
 * Normal Distribution - https://en.wikipedia.org/wiki/Normal_distribution
 * Used Box-Muller Method - https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
 * Function takes as a parameter number of elements you want to generate
 * and return you a data set, that normal distributed
 * @param data_set_len {number} - Number of elements, that you want to generate
 */
function normal_distribution(data_set_len: number): Array<number> {
  if (data_set_len <= 1)
    throw new Error("Distribution need to have more than 1 data point");

  let i: number = 0,
    result: Array<number> = [];

  while (i < Math.ceil(data_set_len / 2)) {
    result = [...result, ...generate_pair()];
    i++;
  }

  if (data_set_len % 2 === 0) {
    return result;
  } else {
    return result.slice(0, result.length - 1);
  }
}

function generate_pair(): [number, number] {
  let result: [number, number];
  let z_0: number,
    z_1: number,
    u: number = 0,
    v: number = 0,
    s: number = 0,
    number_signature: number;

  let pass_check: boolean = false;

  while (!pass_check) {
    u = 2 * Math.random() - 1;
    v = 2 * Math.random() - 1;
    s = Math.pow(u, 2) + Math.pow(v, 2);
    s > 0 && s < 1 ? (pass_check = true) : (pass_check = false);
  }

  number_signature = Math.pow((-2 * Math.log(s)) / s, 1 / 2);

  z_0 = u * number_signature;
  z_1 = v * number_signature;
  result = [z_0, z_1];

  return result;
}

export default normal_distribution;
