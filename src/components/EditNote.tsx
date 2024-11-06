import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [note, setNote] = useState<any>({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5007/api/notes/${id}`
        );
        setNote(response.data.data);
      } catch (error) {
        console.error(`error fetching notes`);
      }
    };

    if (id) {
      fetchNote();
    }
  }, [id]);

  const getNote = async () => {
    try {
      const response = await axios.get(`http://localhost:5007/api/notes/${id}`);
      console.log(response.data);
      setNote(response.data.data);
    } catch (error) {
      console.error("error fetching notes");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const note = {
      title: title,
      content: content,
    };
    try {
      await axios.put(`http://localhost:5007/api/notes/${id}`, note);
      navigate("/");
    } catch (error) {
      console.error("Error in editing in new note");
    }
  };

  return (
    <div>
      <form action='' onSubmit={handleSubmit} className='addnoteForm container'>
        <input
          name='title'
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          className=' addNote title'
          placeholder='edit your title'
          required
          defaultValue={note.title}
        />
        <textarea
          name='content'
          onChange={(e) => setContent(e.target.value)}
          className='addNote content'
          placeholder='edit your content'
          required
          defaultValue={note.content}
        />
        <div className='editNoteBtn'>
          <button type='submit' className='backBtn'>
            Save Note
          </button>
          <Link to={"/"} className='backBtn'>
            BACK
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
