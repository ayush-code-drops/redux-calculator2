import {
  ADD_COUNTER,
  ADD_VALUE,
  DIVIDE_VALUE,
  MULTIPLY_VALUE,
  REDUCE_COUNTER,
  SUB_VALUE
} from "./actionTypes";

export function addCounter(payload) {
  return {
    type: ADD_COUNTER,
    payload
  };
}

export function reduceCounter(payload) {
  return {
    type: REDUCE_COUNTER,
    payload
  };
}

export function addValue(payload) {
  return {
    type: ADD_VALUE,
    payload:Number(payload)
  };
}
export function subValue(payload) {
  return {
    type: SUB_VALUE,
    payload:Number(payload)
  };
}
export function multiplyValue(payload) {
  return {
    type: MULTIPLY_VALUE,
     payload:Number(payload)
  };
}
export function divideValue(payload) {
  return {
    type: DIVIDE_VALUE,
     payload:Number(payload)
  };
}
