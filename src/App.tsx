import React from "react";

import NoteGrid from "./components/NoteGrid";
import NoteCard from "./components/NoteCard";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import OnePage from "./components/OnePage";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";
import AuthPage from "./components/auth/authPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/' element={<HomePage />}>
          <Route path='' element={<NoteGrid />} />
          <Route path='one-note/:id' element={<OnePage />} />
          <Route path='add-note' element={<AddNote />} />
          <Route path='edit-note/:id' element={<EditNote />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
