"use client"
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import ListNotes from '@/components/ListNotes'; 
import { NoteContext } from './Notecontext';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [triggerRefetch, setTriggerRefetch] = useState(0);

 
  useEffect(() => {
    /* eslint-disable */
    const fetchNotes = async () => {
      try {
        const response = await axios.get('/api/notes');
        setNotes(response.data);
        setIsLoading(false);
      } catch (err) { // Remove type annotation from catch clause variable
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, [triggerRefetch]);

  const refreshNotes = () => {
    setTriggerRefetch(prev => prev + 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-items-center bg-white dark:bg-dark overflow-y-auto'>
      <NoteContext.Provider value={{ 
        notes: notes, 
        refreshNotes
      }}>
        <div className='h-full overflow-y-auto w-full p-8 flex flex-wrap items-center justify-center'>
          <ListNotes />
        </div>
      </NoteContext.Provider>
    </div>
  );
};

export default HomePage;