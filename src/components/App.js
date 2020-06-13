import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from '../reducers';

import Note from './Note';

function App() {
  const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return (
    <Provider store={store}>
      <div className="App">
        <Note />
      </div>
    </Provider>
  );
}

export default App;
