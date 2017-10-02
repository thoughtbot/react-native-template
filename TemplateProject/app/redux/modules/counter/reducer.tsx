import { CounterState } from "app/types";
import { DECREMENT, INCREMENT, CounterAction } from "./types";

export const INITIAL_STATE: CounterState = {
  value: 0,
};

export function reducer(
  state: CounterState = INITIAL_STATE,
  action: CounterAction
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
