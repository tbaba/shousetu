export const initialNoteState = {
  title: "",
  body: "",
};

export const UPDATE_NOTE = 'domain/note/updateNote';

export const changeNoteValue = (attr, value) => {
  return {
    type: UPDATE_NOTE,
    payload: { attr, value },
  };
};

export default function note(state = initialNoteState, action) {
  switch (action.type) {
    case UPDATE_NOTE:
      return { ...state, [action.payload.attr]: action.payload.value };
    default:
      return state;
  }
}
