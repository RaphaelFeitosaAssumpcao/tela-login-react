import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <h2>Rotas</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Colaboradores</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
