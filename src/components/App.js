import React from 'react';
import configureStore from '../configureStore';
import { Provider } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import rootReducer, { initialState } from '../reducers';

import Note from './Note';
import NoteList from './NoteList';

function App() {
  const store = configureStore(rootReducer, initialState);

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
