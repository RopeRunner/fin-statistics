import sma from "./moving_avarages/sma/sma";
import linear_weighted_moving_avarage from "./moving_avarages/lwma/lwma";
import ema from "./moving_avarages/ema/ema";

const fin_instruments = {
  sma,
  ema,
  linear_weighted_moving_avarage
};

export default fin_instruments;
