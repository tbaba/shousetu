export const initialNoteListState = [];

export const ADD_NOTE = 'domain/noteList/addNote';
export const DELETE_NOTE = 'domain/noteList/deleteNote';

export default function noteList(state = initialNoteListState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return state;
    case DELETE_NOTE:
      return state;
    default:
      return state;
  }
}
