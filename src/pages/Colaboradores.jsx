import React, { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import "../css/colaboradores.css";
import { colaboradoresMock } from "../data/colaboradores";

const handleEdit = (id) => {
  alert(`Editar colaborador com ID: ${id}`);
};

const handViewDetails = (id) => {
  alert(`Visualizar detalhes do colaborador com ID: ${id}`);
};

const ColaboradoresGrid = ({ searchTerm: searchTermProp, onSearchChange }) => {
  const [colaboradores, setColaboradores] = useState(colaboradoresMock);
  const [internalSearch, setInternalSearch] = useState("");
  const searchTerm =
    searchTermProp !== undefined ? searchTermProp : internalSearch;
  const setSearchTerm = onSearchChange || setInternalSearch;

  const [ordenarPor, setOrdenarPor] = useState("id");
  const [ordenacaoAsc, setOrdenacaoAsc] = useState(true);

  const handleDelete = (id) => {
    setColaboradores((prev) => prev.filter((colaborador) => colaborador.id !== id));
    alert(`Excluir colaborador com ID: ${id}`);
  };

  const filteredColaboradores = useMemo(() => {
    const filtered = colaboradores.filter(
      (colaborador) =>
        colaborador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        colaborador.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const sorted = [...filtered].sort((a, b) => {
      const aVal = a[ordenarPor];
      const bVal = b[ordenarPor];
      if (aVal < bVal) return ordenacaoAsc ? -1 : 1;
      if (aVal > bVal) return ordenacaoAsc ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [colaboradores, searchTerm, ordenarPor, ordenacaoAsc]);

  const ordenaGrid = (column) => {
    const novaOrdenacaoAsc = ordenarPor === column ? !ordenacaoAsc : true;
    setOrdenarPor(column);
    setOrdenacaoAsc(novaOrdenacaoAsc);
  };

  return (
    <div className="grid-container">
      <div className="title-container">
        <h1>Lista de Colaboradores</h1>
      </div>

      <div className="search">
        <FaSearch className="search-input-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Pesquisar..."
          aria-label="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm?.(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => ordenaGrid("id")}>
              ID {ordenarPor === "id" && (ordenacaoAsc ? "↑" : "↓")}
            </th>
            <th onClick={() => ordenaGrid("nome")}>
              Nome {ordenarPor === "nome" && (ordenacaoAsc ? "↑" : "↓")}
            </th>
            <th onClick={() => ordenaGrid("email")}>
              Email {ordenarPor === "email" && (ordenacaoAsc ? "↑" : "↓")}
            </th>
            <th onClick={() => ordenaGrid("cargo")}>
              Cargo {ordenarPor === "cargo" && (ordenacaoAsc ? "↑" : "↓")}
            </th>
            <th onClick={() => ordenaGrid("sala")}>
              Sala {ordenarPor === "sala" && (ordenacaoAsc ? "↑" : "↓")}
            </th>
            <th onClick={() => ordenaGrid("gestor")}>
              Gestor {ordenarPor === "gestor" && (ordenacaoAsc ? "↑" : "↓")}
            </th>
            <th onClick={() => ordenaGrid("diretor")}>
              Diretor {ordenarPor === "diretor" && (ordenacaoAsc ? "↑" : "↓")}
            </th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredColaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nome}</td>
              <td>{colaborador.email}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.sala}</td>
              <td>{colaborador.gestor}</td>
              <td>{colaborador.diretor}</td>
              <td>
                <button
                  className="view-details"
                  onClick={() => handViewDetails(colaborador.id)}
                >
                  Detalhes
                </button>
                <button
                  className="edit"
                  onClick={() => handleEdit(colaborador.id)}
                >
                  Editar
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(colaborador.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColaboradoresGrid;
