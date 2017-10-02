import { CounterState } from "app/types";
import { DECREMENT, INCREMENT } from "./types";

export const INITIAL_STATE: CounterState = {
  value: 0,
};

export function reducer(
  state: CounterState = INITIAL_STATE,
  action
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}
