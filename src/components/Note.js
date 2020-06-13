import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNoteValue } from '../reducers';

const Note = ({ note, onChange }) => {
  return (
    <div className="note">
      <header>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={onChange}
        />
        <textarea
          name="body"
          value={note.body}
          onChange={onChange}
        />
      </header>
    </div>
  );
};

export const NoteProps = () => {
  const { note } = useSelector(state => ({
    note: state.domain.note,
  }));

  const stateProps = {
    note,
  };

  const dispatch = useDispatch();

  const dispatchProps = {
    onChange: (e) => dispatch(changeNoteValue(e.target.name, e.target.value)),
  };

  return {
    ...stateProps,
    ...dispatchProps,
  };
};

export default function NoteBox() {
  return (
    <Note {...NoteProps()} />
  );
}
