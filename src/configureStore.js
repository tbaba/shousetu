import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(rootReducer, initialState) {
  const middlewares = [thunkMiddleware];
  const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
      compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  );

  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );

  return store;
}
