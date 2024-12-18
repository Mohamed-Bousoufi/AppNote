import React,{useState,useEffect,useContext} from "react";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { UpdateNote } from "./AddNote";
import { NoteContext } from "@/app/Notecontext";

interface EditModalProps {
    Notetitle : string;
    Modalopen: boolean;
    onClose: () => void;
  }
export default function EditModal({Notetitle,Modalopen,onClose }: EditModalProps) {
    const { refreshNotes } = useContext(NoteContext);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL+`/notes/${Notetitle}`)
        .then((response) => {
            setTitle(response.data.title);
            setBody(response.data.content);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [Notetitle]);

    const handleClose = () => {
        onClose();
    };
    const NoteObject = {
        title: title,
        content: body
    }
    const handleSubmit =()=>{
      if(!title || !body){
          alert("Please fill all the fields");
          return;
      }
        UpdateNote(Notetitle,NoteObject);
        refreshNotes();
        handleClose();
    }
    
  return (
    <Modal
    open={Modalopen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div className="bg-white dark:bg-dark flex flex-col  w-[60%] h-[40%] space-4 items-center justify-around fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
    <form className="w-full h-full flex flex-col items-center justify-around" onSubmit={handleSubmit}>
        <div className="title flex justify-start items-center w-[80%] h-1/6 text-black dark:text-white">
        <h5 className="text-lg font-extrabold p-4">Add New Note</h5>
        </div>
        <div className="flex flex-col items-center justify-around w-[80%]  my-4">
          <input
            className="form-control border-2 border-solid border-gray-400 p-4 rounded-md m-2 w-[100%] text-dark"
            id="exampleFormControlInput1"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="form-control border-2 border-solid border-gray-400 p-4 rounded-md m-2 w-[100%] h-[60%] text-dark"
            id="exampleFormControlTextarea1"
            rows={4}
            placeholder="Content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-around w-[80%] ">
        <button className="text-lg font-extrabold  border-2 border-solid border-gray-400 px-24 py-4   rounded-lg "onClick={handleClose}>Close</button>
        <button className="text-lg font-extrabold bg-secondray text-white px-24 py-4  rounded-lg" type="submit">Save</button>
        </div>
      </form>
    </div>
  </Modal>
  );
}