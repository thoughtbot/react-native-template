import { INITIAL_STATE, actions, reducer } from "../counter";

test("increment", () => {
  expect(reducer(INITIAL_STATE, actions.increment())).toMatchSnapshot();
});

test("decrement", () => {
  expect(reducer(INITIAL_STATE, actions.decrement())).toMatchSnapshot();
});
