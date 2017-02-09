import counterReducer from './counter';

const initialState = {};

export default function(state = initialState, action) {
  return {
    counter: counterReducer(state.counter, action),
  };
}
