import { INITIAL_STATE, reducer, increment, decrement } from "../counter";

test("increment", () => {
  expect(reducer(INITIAL_STATE, increment())).toMatchSnapshot();
});

test("decrement", () => {
  expect(reducer(INITIAL_STATE, decrement())).toMatchSnapshot();
});
