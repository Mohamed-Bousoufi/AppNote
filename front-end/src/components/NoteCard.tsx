import React from "react";
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

const Card = (note) => {
  note = note.note;
  const body = `${note.content.split(" ").slice(0, 20).join(" ")} ...`;
  return (
    <div className="w-[40%] h-1/6 flex flex-row items-center m-6">
      <div className="card-wrapper flex flex-row items-center justify-center w-full h-full">
        <div className="card-content dark:bg-gray-600 bg-slate-50 ">
          <div className="text-center justify-center w-full  text-black dark:text-white p-8">
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
                    <DropdownMenuItem>
                      <SquarePen className="w-6 h-6"></SquarePen>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash2 className="w-6 h-6 text-red-700"></Trash2>
                      <span className="text-red-700 text-base">Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-start">
                    <p className="font-medium text-sm p-2">{body}</p>
                  </div>
                  <div className="flex flex-col items-center justify-start text-muted">
                    <p className="font-light text-xs p-2">
                      {FormatDate(note.updated_at)}
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
