export interface State {
  readonly value: number;
}

type Increment = 'counter/INCREMENT';
type Decrement = 'counter/DECREMENT';
const INCREMENT: Increment = 'counter/INCREMENT';
const DECREMENT: Decrement = 'counter/DECREMENT';

type Action = { type: Increment } | { type: Decrement };

export const increment = (): Action => ({ type: INCREMENT });
export const decrement = (): Action => ({ type: DECREMENT });

export const INITIAL_STATE: State = {
  value: 0,
};

export default function reducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      // TODO: figure out how to make this exhaustive
      return state;
  }
}
