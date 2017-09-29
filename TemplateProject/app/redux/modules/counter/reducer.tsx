import { CounterState } from "app/types";

export const INITIAL_STATE: CounterState = {
  value: 0,
};

export function reducer(state: CounterState = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
