import { combineReducers } from 'redux';
import domain, {
  initialDomainState,
  changeNoteValue,
  insertNote,
} from './domain';
import {
  asyncGetAllNotes,
  asyncCreateNote,
} from './thunkActions';

export const initialState = {
  domain: initialDomainState,
};

export default combineReducers({
  domain,
});

export {
  changeNoteValue,
  asyncGetAllNotes,
  asyncCreateNote,
  insertNote,
};
