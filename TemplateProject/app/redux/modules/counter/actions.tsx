import {
  DECREMENT,
  INCREMENT,
  DecrementCounter,
  IncrementCounter,
} from "./types";

export const decrement = (): DecrementCounter => ({
  type: DECREMENT,
});

export const increment = (): IncrementCounter => ({
  type: INCREMENT,
});
