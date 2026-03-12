import React, { useState } from "react";
import "./colaboradores.css";

const colaboradores = [
  {
    id: 1,
    nome: "João Silva",
    cargo: "Desenvolvedor Front-end",
    email: "joao.silva@example.com",
  },
  {
    id: 2,
    nome: "Maria Santos",
    cargo: "Designer Gráfico",
    email: "maria.santos@example.com",
  },
  {
    id: 3,
    nome: "Carlos Souza",
    cargo: "Analista de Sistemas",
    email: "carlos.souza@example.com",
  },
  {
    id: 4,
    nome: "Ana Costa",
    cargo: "Gerente de Projetos",
    email: "ana.costa@example.com",
  },
];

const ColaboradoresGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ordenarPor, setOrdenarPor] = useState("id"); // Define qual coluna ordenar
  const [ordenacaoAsc, setOrdenacaoAsc] = useState(true);

  const filteredColaboradores = colaboradores.filter(
    (colaborador) =>
      colaborador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colaborador.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const ordenaGrid = (column) => {
    const novaOrdenacaoAsc = ordenarPor === column ? !ordenacaoAsc : true;
    setOrdenarPor(column);
    setOrdenacaoAsc(novaOrdenacaoAsc);

    colaboradores.sort((a, b) => {
      if (a[column] < b[column]) return novaOrdenacaoAsc ? -1 : 1;
      if (a[column] > b[column]) return novaOrdenacaoAsc ? 1 : -1;
      return 0;
    });
  };

  return (
    <div className="grid-container">
      <div className="title-container">
        <h1>Lista de Colaboradores</h1>
        <input
          type="text"
          placeholder="Pesquisar por nome, cargo ou email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th onClick={() => ordenaGrid("ID")}>
              ID {ordenarPor === "ID" && (ordenacaoAsc ? "↑" : "↓")}
            </th>
            <th onClick={() => ordenaGrid("nome")}>
              Nome {ordenarPor === "nome" && (ordenacaoAsc ? "↑" : "↓")}
            </th>
            <th onClick={() => ordenaGrid("cargo")}>
              Cargo {ordenarPor === "cargo" && (ordenacaoAsc ? "↑" : "↓")}
            </th>
            <th onClick={() => ordenaGrid("email")}>
              Email {ordenarPor === "email" && (ordenacaoAsc ? "↑" : "↓")}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredColaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nome}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColaboradoresGrid;
