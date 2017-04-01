const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export const INITIAL_STATE = {
  value: 0,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
