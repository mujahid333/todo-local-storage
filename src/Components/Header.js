import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    
      <div className="list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add product</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
          <Link to="/update">Update product</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
  );
};
