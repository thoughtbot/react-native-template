import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import thunk from "redux-thunk";

import { reducer } from "./reducer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

if (module.hot) {
  const acceptCallback = () => {
    const nextReducer = require("./reducer").reducer;
    store.replaceReducer(nextReducer);
  };
  module.hot.accept("./reducer", acceptCallback);
  module.hot.acceptCallback = acceptCallback;
}

export { store };
