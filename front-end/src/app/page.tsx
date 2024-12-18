"use client"
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import ListNotes from '@/components/ListNotes'; // Assuming this is the correct import

interface NoteContextType {
  notes: any[]; 
  refreshNotes: () => void;
}

export const NoteContext = createContext<NoteContextType>({
  notes: [],
  refreshNotes: () => {} 
});

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [triggerRefetch, setTriggerRefetch] = useState(0);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notes`);
        setNotes(response.data);
        setError(null);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, [triggerRefetch]);

  const refreshNotes = () => {
    setTriggerRefetch(prev => prev + 1);
    console.log('Refreshing notes...');
  };

  if (isLoading) {
    return <div>Loading notes...</div>; 
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