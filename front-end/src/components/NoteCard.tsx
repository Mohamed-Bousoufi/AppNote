import React,{useState} from "react";
import "../components/NoteCard.css";
import Link from "next/link";
import { Ellipsis, SquarePen, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormatDate } from "@/components/FormateDate";
import EditModal from "./EditModal";
import DelModal from "./DelModal";
/*eslint-disable*/
const Card = (note: any) => {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  
  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };
  const handleDeleteClick = () => {
    setIsDelModalOpen(true);
  };
  note = note.note;
  const body = `${note.content.split(" ").slice(0, 15).join(" ")} ...`;
  return (
    <div className="w-[50%] h-[20%] flex flex-row items-center justify-center m-6">
      <div className="card-wrapper flex flex-row items-center justify-center w-full h-full">
        <div className="card-content dark:bg-gray-600 bg-slate-50 p-4">
           <div className=" text-black dark:text-white p-2">
            <div className="flex flex-col">
              <div className="card-header flex flex-row items-center justify-between">
                <Link
                  href={{
                    pathname: "/notes-detail",
                    query: { id: note.id },
                  }}
                >
                  <h5 className="font-extrabold text-lg p-2">{note.title}</h5>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis className="w-6 h-6" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white dark:bg-dark">
                    <DropdownMenuItem onClick={handleEditClick}>
                      <SquarePen className="w-6 h-6"></SquarePen>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleDeleteClick}>
                      <Trash2 className="w-6 h-6 text-red-700"></Trash2>
                      <span className="text-red-700 text-base">Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-start">
                    <p className="font-medium text-sm text-wrap text-center ">{body}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center text-muted">
                    <p className="font-light text-xs p-2">
                      {FormatDate(note.created_at)}
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <EditModal  Notetitle={note.title} Modalopen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
      )}

      {isDelModalOpen && (
        <DelModal  Notetitle={note.title} Modalopen={isDelModalOpen} onClose={() => setIsDelModalOpen(false)} />
      )}
    </div>
  );
};

export default Card;

