import { AppState } from "app/types";
import * as counter from "./counter";

const initialState: AppState = {
  counter: {
    value: 0,
  },
};

export default function(state: AppState = initialState, action) {
  return {
    counter: counter.reducer(state.counter, action),
  };
}
