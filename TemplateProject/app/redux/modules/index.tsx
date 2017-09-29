import { AppState } from "app/types";
import * as counter from "./counter/reducer";

const initialState: AppState = {
  counter: {
    value: 0,
  },
};

export default function(state: AppState = initialState, action): AppState {
  return {
    counter: counter.reducer(state.counter, action),
  };
}
