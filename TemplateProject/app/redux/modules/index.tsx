import { AppState } from "app/types";
import { AppAction } from "./types";

import { reducer as counter } from "modules/counter";

const initialState: AppState = {
  counter: {
    value: 0,
  },
};

export default function(
  state: AppState = initialState,
  action: AppAction
): AppState {
  return {
    counter: counter(state.counter, action),
  };
}
