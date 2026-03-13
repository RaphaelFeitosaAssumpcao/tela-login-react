import React, { useState } from "react";
import "./colaboradores.css";

const colaboradores = [
  {
    id: 1,
    nome: "João Silva",
    cargo: "Desenvolvedor Front-end",
    email: "joao.silva@example.com",
    sala: "Desenvolvimento",
    gestor: "Ronaldo",
    diretor: "Josué",
  },
  {
    id: 2,
    nome: "Maria Santos",
    cargo: "Designer Gráfico",
    email: "maria.santos@example.com",
    sala: "Design",
    gestor: "Felipe",
    diretor: "Ana",
  },
  {
    id: 3,
    nome: "Carlos Souza",
    cargo: "Analista de Sistemas",
    email: "carlos.souza@example.com",
    sala: "TI",
    gestor: "Ronaldo",
    diretor: "Josué",
  },
  {
    id: 4,
    nome: "Ana Costa",
    cargo: "Gerente de Projetos",
    email: "ana.costa@example.com",
    sala: "Gestão",
    gestor: "Carla",
    diretor: "Pedro",
  },
  {
    id: 5,
    nome: "Pedro Almeida",
    cargo: "Desenvolvedor Backend",
    email: "pedro.almeida@example.com",
    sala: "Desenvolvimento",
    gestor: "Ronaldo",
    diretor: "Josué",
  },
  {
    id: 6,
    nome: "Juliana Oliveira",
    cargo: "Analista de Dados",
    email: "juliana.oliveira@example.com",
    sala: "Análise",
    gestor: "Ronaldo",
    diretor: "Josué",
  },
  {
    id: 7,
    nome: "Fernando Lima",
    cargo: "Designer UX/UI",
    email: "fernando.lima@example.com",
    sala: "Design",
    gestor: "Felipe",
    diretor: "Ana",
  },
  {
    id: 8,
    nome: "Roberta Ferreira",
    cargo: "Gerente de TI",
    email: "roberta.ferreira@example.com",
    sala: "TI",
    gestor: "Ronaldo",
    diretor: "Josué",
  },
  {
    id: 9,
    nome: "Lucas Mendes",
    cargo: "Analista de Suporte",
    email: "lucas.mendes@example.com",
    sala: "Suporte",
    gestor: "Carla",
    diretor: "Pedro",
  },
  {
    id: 10,
    nome: "Paula Costa",
    cargo: "Coordenadora de Marketing",
    email: "paula.costa@example.com",
    sala: "Marketing",
    gestor: "Felipe",
    diretor: "Ana",
  },
  {
    id: 11,
    nome: "Marcos Pereira",
    cargo: "Gestor de Operações",
    email: "marcos.pereira@example.com",
    sala: "Operações",
    gestor: "Felipe",
    diretor: "Pedro",
  },
  {
    id: 12,
    nome: "Carla Oliveira",
    cargo: "Gestora de RH",
    email: "carla.oliveira@example.com",
    sala: "RH",
    gestor: "Felipe",
    diretor: "Ana",
  },
];

const handleEdit = (id) => {
  alert(`Editar colaborador com ID: ${id}`);
};

const handleDelete = (id) => {
  const newColaboradores = colaboradores.filter(
    (colaborador) => colaborador.id !== id,
  );
  setCollaboradores(newColaboradores);
  alert(`Excluir colaborador com ID: ${id}`);
};

const handViewDetails = (id) => {
  alert(`Visualizar detalhes do colaborador com ID: ${id}`);
};

const ColaboradoresGrid = ({ searchTerm: searchTermProp, onSearchChange }) => {
  const [internalSearch, setInternalSearch] = useState("");
  const searchTerm = searchTermProp !== undefined ? searchTermProp : internalSearch;
  const setSearchTerm = onSearchChange || setInternalSearch;

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
        <p className="search-hint">
          Use a pesquisa na barra lateral para filtrar por nome, cargo ou email.
        </p>
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
