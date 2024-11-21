import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NoteCard from "./NoteCard";
import { Note } from "../model/NoteTypes";

import Header from "./Header";

// const NoteGrid = () => {
//   const oneNote = {
//     id: "12345",
//     content: "How to be code in react ",
//     title: "Software student",
//     updateAt: "2:00pm",
//     createdAt: "8:00am",
//   };

const NoteGrid = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const response = await axios.get("http://localhost:5007/api/notes/");
      console.log(response.data);
      setNotes(response.data.data);
    } catch (error) {
      console.error("error fetching notes");
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5007/api/notes/${id}`);

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note");
    }
  };

  return (
    <>
      <Header />
      <div className='gridContainer container'>
        {notes &&
          notes.map((note: any) => (
            <NoteCard key={note._id} note={note} deleteNote={deleteNote} />
          ))}
      </div>
    </>
  );
};

export default NoteGrid;
