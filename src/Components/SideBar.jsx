import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../css/sidebar.css";
import { sidebarItemsMock } from "../data/sidebarItems";

/**
 * SideBar genérico: usa itens mockados por padrão ou recebe itens via props.
 * Reutilizável em outros layouts passando a prop `items`.
 * @param {Array} [items] - Lista de { id, tela, path, label, icon, end } (opcional)
 */
const SideBar = ({ items = sidebarItemsMock }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItens = items.filter((itens) =>
    itens.tela.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <nav>
        <ul>
          {filteredItens.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <Icon className="sideBar-icon" />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
