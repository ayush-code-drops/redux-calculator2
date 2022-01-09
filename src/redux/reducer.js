import { ADD_COUNTER, ADD_VALUE, DIVIDE_VALUE, MULTIPLY_VALUE, REDUCE_COUNTER, SUB_VALUE } from "./actionTypes";

const initState = {
  counter: 1,
};
export function reducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case REDUCE_COUNTER:
      return state.counter > 0
        ? {
            ...state,
            counter: state.counter - payload
          }
        : state;
    case ADD_VALUE:
      return {
        ...state,
        counter: state.counter + payload,
      };
      case SUB_VALUE:
      return {
        ...state,
        counter: state.counter - payload,
      };
      case MULTIPLY_VALUE:
      return {
        ...state,
        counter: state.counter * payload,
      };
      case DIVIDE_VALUE:
      return {
        ...state,
     counter:state.counter%payload===0?(state.counter/payload):null
      };
    default:
      return state;
  }
}
