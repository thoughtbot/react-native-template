import { AppState } from "app/types";
import { AppAction } from "./types";
import * as counter from "./counter/reducer";

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
    counter: counter.reducer(state.counter, action),
  };
}
