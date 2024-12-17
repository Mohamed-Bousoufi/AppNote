"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon, NotebookIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import AddNote  from "./AddNote";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const NewNote ={
    title: title,
    content: body
  }

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    if (!title || !body) {
      alert("Please fill all the fields");
      return;
    }
    AddNote(NewNote);
  };

  return (
    <nav className="bg-white  dark:bg-dark text-black p-4 sticky top-0 z-10 ">
      <div className="flex justify-evenly w-full max-auto">
        <Link href="/" className="flex items-center space-x-2">
          <NotebookIcon className="h-10 w-10 dark:text-white" />
        </Link>
        <div className="flex items-end space-x-4">
          <button
            onClick={toggleDarkMode}
            className="dark:text-gray-200 text-black  p-4 rounded-md border-2 border-solid border-black dark:border-white"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle dark mode</span>
          </button>
          <button className="bg-secondray flex items-center justify-center px-12 py-4 text-white rounded-md" onClick={handleOpen}>
            Add Note
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="bg-white dark:bg-dark flex flex-col  w-[60%] h-[40%] space-4 items-center justify-around fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
            <form className="w-full h-full flex flex-col items-center justify-around" onSubmit={handleSubmit}>
                <div className="title flex justify-start items-center w-[80%] h-1/6 text-gray-400">
                <h5 className="font-lg p-4">Add New Note</h5>
                </div>
                <div className="flex flex-col items-center justify-around w-[80%]  my-4">
                  <input
                    className="form-control border-2 border-solid border-gray-400 p-4 rounded-md m-2 w-[100%]"
                    id="exampleFormControlInput1"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <textarea
                    className="form-control border-2 border-solid border-gray-400 p-4 rounded-md m-2 w-[100%] h-[60%]"
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
        </div>
      </div>
    </nav>
  );
}
