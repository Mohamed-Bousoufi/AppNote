import { createContext } from 'react';

interface NoteContextType {
    notes: unknown[]; 
    refreshNotes: () => void;
  }
  
  export const NoteContext = createContext<NoteContextType>({
    notes: [],
    refreshNotes: () => {} 
  });