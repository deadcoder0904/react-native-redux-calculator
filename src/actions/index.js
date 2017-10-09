import {
  TOGGLE_PLUS_MINUS,
  SAVE_EXPRESSION,
  CALCULATE_RESULT,
  CLEAR_RESULT
} from "../constants/";

export const togglePlusMinus = () => ({
  type: TOGGLE_PLUS_MINUS
});

export const saveExpression = payload => ({ type: SAVE_EXPRESSION, payload });
export const calcResult = () => ({ type: CALCULATE_RESULT });
export const clearResult = () => ({ type: CLEAR_RESULT });
