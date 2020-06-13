export const initialNoteListState = [];

export const INSERT_NOTE = 'domain/noteList/insertNote';
export const DELETE_NOTE = 'domain/noteList/deleteNote';

export const insertNote = (note) => {
  return {
    type: INSERT_NOTE,
    payload: note,
  };
};

export default function noteList(state = initialNoteListState, action) {
  switch (action.type) {
    case INSERT_NOTE:
      state.push(action.payload);
      return state;
    case DELETE_NOTE:
      return state;
    default:
      return state;
  }
}
