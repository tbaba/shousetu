import db, { serverTimestamp } from '../firebase';
import { insertNote, setNotes } from '.';

const asyncGetAllNotes = () => {
  return async (dispatch, getState) => {
    const ref = db.ref('notes');
    console.log(ref);
  }
};

const asyncCreateNote = () => {
  return async (dispatch, getState) => {
    const {
      domain: {
        note,
      },
    } = getState();

    db.collection('notes').add({
      title: note.title,
      body: note.body,
      createdAt: serverTimestamp(),
    }).then(docRef => {
      dispatch(insertNote(note));
    }).catch(error => {
      console.log(`Error! ${error}`);
    });
  }
};

export {
  asyncGetAllNotes,
  asyncCreateNote,
};
