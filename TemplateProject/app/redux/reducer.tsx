import { combineReducers } from "redux";

import { reducer as counter } from "modules/counter";

const reducer = combineReducers({
  counter,
});

export { reducer };
