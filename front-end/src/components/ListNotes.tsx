
import React,{useContext} from 'react'
import { NoteContext } from '../app/Notecontext'
import Card from './NoteCard'


const ListNotes = () => {
  const {notes} = useContext(NoteContext); 
  /*eslint-disable*/
  return (
      <>
      {notes.map((note: any) => (<Card key={note.id} note={note} />))}
      </>
  )
}

export default ListNotes