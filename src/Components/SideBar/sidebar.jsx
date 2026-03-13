import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaSearch } from "react-icons/fa";
import "./sidebar.css";

const SideBar = ({ searchTerm = "", onSearchChange }) => {
  return (
    <div className="sideBar">
      <h2>Rotas</h2>
      <div className="sideBar-search">
        <FaSearch className="sideBar-search-icon" />
        <input
          type="text"
          className="sideBar-search-input"
          placeholder="Pesquisar..."
          aria-label="Pesquisar"
          value={searchTerm}
          onChange={(e) => onSearchChange?.(e.target.value)}
        />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              <FaHome className="sideBar-icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/colaboradores" className={({ isActive }) => (isActive ? "active" : "")}>
              <FaUsers className="sideBar-icon" />
              Colaboradores
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
