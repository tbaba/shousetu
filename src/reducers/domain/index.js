import { combineReducers } from 'redux';
import note, {
  initialNoteState,
  changeNoteValue,
} from './note';
import noteList, {
  initialNoteListState,
  insertNote,
} from './noteList';

export const initialDomainState = {
  note: initialNoteState,
  noteList: initialNoteListState,
};

export default combineReducers({
  note,
  noteList,
});

export {
  changeNoteValue,
  insertNote,
};
