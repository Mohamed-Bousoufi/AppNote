import Modal from "@mui/material/Modal";
import React,{useContext} from 'react';
import { DeleteNote } from "./AddNote";
import { NoteContext } from "@/app/Notecontext";

interface DelModalProps {
    Notetitle: string;
    Modalopen: boolean;
    onClose: () => void;
}

const DelModal = ({ Notetitle,Modalopen, onClose }: DelModalProps) => {
    const { refreshNotes } = useContext(NoteContext);

    const handleClose = () => {
        onClose();
    };
    const handleSubmit = ()=>{
        DeleteNote(Notetitle);
        onClose();
        refreshNotes();

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
                <h5 className="text-lg font-extrabold p-4 text-right">remove your Note</h5>
                </div>
            <div className="flex flex-row items-start justify-between w-[80%] ">
                <button className="text-lg font-extrabold  border-2 border-solid border-secondray  px-24 py-4   rounded-lg "onClick={handleClose}>Close</button>
                <button className="text-lg font-extrabold bg-secondray text-white px-24 py-4  rounded-lg" type="submit">Save</button>
            </div>
            </form>
        </div>
      </Modal>
    );
}

export default DelModal;