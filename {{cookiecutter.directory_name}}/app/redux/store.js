import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from './modules';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

if (module.hot) {
  const acceptCallback = () => {
    const nextRootReducer = require('./modules').default;
    store.replaceReducer(nextRootReducer);
  };
  module.hot.accept('./modules', acceptCallback);
  module.hot.acceptCallback = acceptCallback;
}

export default store;
