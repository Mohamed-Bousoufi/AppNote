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
    <div className='w-full h-full flex flex-col items-center justify-items-center bg-white dark:bg-dark overflow-y-auto'>
      <NoteContext.Provider value={notes}>
      <div className='h-full overflow-y-auto w-full p-8 flex flex-wrap items-center justify-center'>
          <ListNotes />
      </div>
      </NoteContext.Provider>
    </div>
);
};

export default HomePage;