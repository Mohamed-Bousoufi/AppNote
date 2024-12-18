import react, { useContext } from "react";

import React from 'react'
import { NoteContext } from '../app/page'
import Card from './NoteCard'

const ListNotes = () => {
  const {notes} = useContext(NoteContext) as Note[]; 
  return (
      <>
      {notes.map((note) => (<Card key={note.id} note={note} />))}
      </>
  )
}

export default ListNotes