"use client"
import React from 'react';
import axios from 'axios';
import { useEffect,useState,createContext } from 'react';
import ListNotes from '../components/ListNotes';

export const NoteContext = createContext();
const HomePage = () => {
 const [notes,SetNotes] = useState([]);

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API_URL + '/notes')
    .then((response) => {
      SetNotes(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[])
  return (
    <div className='w-full h-full flex flex-col items-center justify-items-start bg-white dark:bg-dark'>
      <NoteContext.Provider value={notes}>
        <ListNotes />
      </NoteContext.Provider>
    </div>
);
};

export default HomePage;