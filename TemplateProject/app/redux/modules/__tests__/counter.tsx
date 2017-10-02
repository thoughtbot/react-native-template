import { INITIAL_STATE, reducer } from "../counter/reducer";
import { decrement, increment } from "../counter/actions";

test("increment", () => {
  expect(reducer(INITIAL_STATE, increment())).toMatchSnapshot();
});

test("decrement", () => {
  expect(reducer(INITIAL_STATE, decrement())).toMatchSnapshot();
});
