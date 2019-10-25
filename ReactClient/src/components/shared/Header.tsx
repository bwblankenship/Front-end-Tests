import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="top-row px-4">
      <h1>Asset Editor Test - React</h1>
      <div className="ml-md-auto">
        <NavLink to="/" exact>
          Home
        </NavLink>
        {" | "}
        <a href="https://reactjs.org/" target="_blank" className="ml-md-auto">
          About
        </a>
      </div>
    </div>
  );
};

export default Header;
