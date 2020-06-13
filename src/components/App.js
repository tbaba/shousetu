import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import rootReducers from '../reducers';

import Note from './Note';
import NoteList from './NoteList';

function App() {
  const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return (
    <Provider store={store}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <NoteList />
        </Grid>
        <Grid item xs={9}>
          <Note />
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
