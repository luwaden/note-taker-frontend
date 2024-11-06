import React from "react";

const Header = () => {
  return (
    <div className='header container '>
      <input type='text' placeholder='Search' className='searchBox' />
      <div className='note-boxes'></div>
    </div>
  );
};

export default Header;
