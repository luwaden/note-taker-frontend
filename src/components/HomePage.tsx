import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='body'>
      <Sidebar />
      <div className='gridBox'>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
