import axios from 'axios';

interface NoteData {
  title: string;
  content: string;
}

export const AddNote = (data: NoteData) => {
  axios.post(process.env.NEXT_PUBLIC_API_URL+'/notes', data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const UpdateNote = (title: string, data: NoteData) => {
  axios.put(process.env.NEXT_PUBLIC_API_URL+'/notes/'+title, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export const DeleteNote = (title: string) => {
  axios.delete(process.env.NEXT_PUBLIC_API_URL+'/notes/'+title)
    .then((response) => {
      console.log("Deleted note with title: "+response);
    })
    .catch((error) => {
      console.log(error);
    });
}
