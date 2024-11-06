import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Note } from "../model/NoteTypes";

const OnePage = () => {
  const [note, setNote] = useState<any>({});
  const { id } = useParams();
  useEffect(() => {
    getNote();
  }, []);

  const getNote = async () => {
    try {
      const response = await axios.get(`http://localhost:5007/api/notes/${id}`);
      console.log(response.data);
      setNote(response.data.data);
    } catch (error) {
      console.error("error fetching notes");
    }
  };

  return (
    <div>
      <div className='onePage container'>
        <h2> {note.title}</h2>
        <p>{note.content}</p>
        <small> {note.createdAt}</small>
      </div>
      <div className='notePageBtn container'>
        <Link to={"/"} className='backBtn'>
          BACK
        </Link>
        <Link to={`/edit-note/${id}`} className='backBtn'>
          EDIT
        </Link>
      </div>
    </div>
  );
};

export default OnePage;
