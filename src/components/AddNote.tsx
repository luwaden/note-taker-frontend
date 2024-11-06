import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const note = {
      title: title,
      content: content,
    };
    try {
      await axios.post(`http://localhost:5007/api/notes`, note);
      navigate("/");
    } catch (error) {
      console.error("Error in creating in new note");
    }
  };

  return (
    <div>
      <form action='' onSubmit={handleSubmit} className='addnoteForm'>
        <input
          name='title'
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          className=' addNote title'
          placeholder='type in your title'
          required
        />
        <textarea
          name='content'
          onChange={(e) => setContent(e.target.value)}
          className='addNote content'
          placeholder='type in your note'
          required
        />
        <button type='submit'>Save Note</button>
      </form>
    </div>
  );
};

export default AddNote;
