import counterReducer, {
  INITIAL_STATE as COUNTER_INITIAL_STATE,
  State as CounterState,
} from './counter';

export interface AppState {
  readonly counter: CounterState;
}

const INITIAL_STATE: AppState = {
  counter: COUNTER_INITIAL_STATE,
};

export default function(state: AppState = INITIAL_STATE, action): AppState {
  return {
    counter: counterReducer(state.counter, action),
  };
}
