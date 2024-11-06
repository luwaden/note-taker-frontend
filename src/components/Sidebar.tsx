import React from "react";
import AddNote from "./AddNote";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar container'>
      <Link to={"/"} className='logo'>
        Prox Note
      </Link>
      <div className='icon-box blueBtn'>
        <div className='categories blueBtn'>Categories</div>
        <div className='share blueBtn'>SHARE</div>
        <Link to={"/add-note"} className='addNoteBtn'>
          add
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
