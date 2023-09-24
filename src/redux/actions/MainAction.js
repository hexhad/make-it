import { MAIN } from "../types/MainTypes";
import { customDelay } from "../../utils/Common";

const getDummy = () => async (dispatch, getState) => {
  dispatch({ type:MAIN.LOADING });
  try {
    await customDelay(1000);
    dispatch({ type:MAIN.SUCCESS, payload:"CUSTOM DELAY" });
  } catch (e) {
    dispatch({ type:MAIN.FAILED, payload:e });
  }
};

export const MainAction = {
  getDummy,
}
