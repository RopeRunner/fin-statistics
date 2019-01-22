export { default as min } from "./src/min/min";
export { default as max } from "./src/max/max";
export { default as plain_matrix } from "./src/plain_matrix/plain_matrix";
export { default as sum } from "./src/sum/sum";
export { default as mean } from "./src/mean/mean";
export { default as variance } from "./src/variance/variance";
export {
  default as standart_deviation
} from "./src/standart_deviation/standart_deviation";
export { default as z_score } from "./src/z_score/z_score";
export { default as median } from "./src/median/median";
export { default as matrix_sum } from "./src/matrix_sum/matrix_sum";
export {
  default as sqr_mtrx_mult
} from "./src/square_matrix_multiplication/square_matrix_multiplication";
export { default as harmonic_mean } from "./src/harmonic_mean/harmonic_mean";
import * as fin_instruments from "./src/fin_instruments/index";

console.log(
  fin_instruments.linear_weighted_moving_avarage(
    [5.3, 6.7, 7.9, 7.1, 5.2, 4.1, 3.5, 5.4, 7.3, 9.4, 8, 6.6, 7.9, 9.2, 7.6],
    5
  )
);
