import * as counter from "./counter";

const initialState = {};

export default function(state = initialState, action) {
  return {
    counter: counter.reducer(state.counter, action),
  };
}
