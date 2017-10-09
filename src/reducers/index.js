import {
  TOGGLE_PLUS_MINUS,
  SAVE_EXPRESSION,
  CALCULATE_RESULT,
  CLEAR_RESULT
} from "../constants/";
import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_RESULT:
      return initialState;
    case TOGGLE_PLUS_MINUS: {
      let result;
      try {
        const temp = eval(state.expression);
        result = state.expression === "0" ? 0 : -temp;
      } catch (e) {
      } finally {
        if (!result || typeof +result !== "number") result = 0;
        return {
          ...state,
          result
        };
      }
    }
    case CALCULATE_RESULT: {
      let result;
      try {
        const temp = eval(state.expression);
        result = temp === parseInt(temp) ? temp : temp.toFixed(2);
      } catch (e) {
      } finally {
        if (!result || typeof +result !== "number") result = 0;
        return {
          ...state,
          result
        };
      }
    }
    case SAVE_EXPRESSION:
      const operator = ["+", "-", "*", "/", "%"];
      if (state.expression === "0" && operator.indexOf(action.payload) != -1)
        return state;
      return {
        ...state,
        expression:
          state.expression === "0"
            ? action.payload
            : state.expression + action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
