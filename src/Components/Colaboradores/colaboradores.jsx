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

  const filteredColaboradores = colaboradores.filter(
    (colaborador) =>
      colaborador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colaborador.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="grid-container">
      <div className="title-container">
        <h1>Lista de Colaboradores</h1>
        <input
          type="text"
          placeholder="Pesquisar por nome, cargo ou email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado com o valor da pesquisa
          className="search-bar"
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Email</th>
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
