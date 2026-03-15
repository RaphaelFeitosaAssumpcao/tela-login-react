import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaSearch } from "react-icons/fa";
import "./sidebar.css";

const ItensSideBar = [
  {
    id: 1,
    tela: "home",
    path: "/",
    label: "Home",
    icon: FaHome,
    end: true,
  },
  {
    id: 2,
    tela: "colaborador",
    path: "/colaboradores",
    label: "Colaboradores",
    icon: FaUsers,
    end: false,
  },
];

const SideBar = () => {
  // CORREÇÃO: importar useState (estava faltando e quebrava a tela)
  const [searchTerm, setSearchTerm] = useState("");

  // Filtro local: só exibe itens cujo "tela" contém o texto digitado
  const filteredItens = ItensSideBar.filter((itens) =>
    itens.tela.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="sideBar">
      <h2>Rotas</h2>
      <div className="sideBar-search">
        <FaSearch className="sideBar-search-icon" />
        {/* CORREÇÃO: onChange usa setSearchTerm (estado local). Antes usava onSearchChange que não existe como prop */}
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
          {/* CORREÇÃO: renderizar links a partir de filteredItens em vez de lista fixa */}
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
