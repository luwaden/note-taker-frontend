import React, { useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import { Note } from "../model/NoteTypes";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";

import NoteGrid from "./NoteGrid";

interface NoteCardProps {
  note: Note;
  deleteNote: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, deleteNote }) => {
  const handleDelete = async (e: any) => {
    e.preventDefault();
    deleteNote(note._id);
  };

  const date = new Date(note.createdAt);
  const formattedDate = date.toLocaleDateString();

  return (
    <Link to={`/one-note/${note._id}`} className='noteCard '>
      <h2> {note.title}</h2>
      <p>{note.content}</p>
      <small>Created At: {formattedDate}</small>
      <button onClick={handleDelete} className='deleteBtn'>
        {" "}
        <MdDeleteForever />
        Delete
      </button>
    </Link>
  );
};

export default NoteCard;
