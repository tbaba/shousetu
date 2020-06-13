import React from 'react';
import { useSelector } from 'react-redux';

const NoteList = ({ noteList }) => {
  return (
    <ul>
      {noteList.map(note => (
        <li key={note.title}>
          <h3>{note.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export const NoteListProps = () => {
  const { noteList } = useSelector(state => ({
    noteList: state.domain.noteList,
  }));

  return {
    noteList,
  };
};

export default function NoteListBox() {
  return (
    <NoteList {...NoteListProps()} />
  );
}
