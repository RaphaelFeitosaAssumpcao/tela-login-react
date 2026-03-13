import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <h2>Rotas</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/colaboradores">Colaboradores</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
