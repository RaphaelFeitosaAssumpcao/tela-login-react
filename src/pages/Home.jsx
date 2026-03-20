import React, { useMemo, useState } from "react";
import "../css/home.css";
import "../css/cards.css";
import StatCard from "../Components/home/statCard";
import { colaboradoresMock } from "../data/colaboradores";

function Home() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const totalColaboradores = colaboradoresMock.length;

  const totalAtivos = colaboradoresMock.filter(
    (colaborador) => colaborador.status === "Ativo",
  ).length;

  const totalInativos = colaboradoresMock.filter(
    (colaborador) => colaborador.status === "Inativo",
  ).length;

  const totalSetores = new Set(
    colaboradoresMock.map((colaborador) => colaborador.sala),
  ).size;

  const colaboradoresFiltrados = useMemo(() => {
    return colaboradoresMock.filter((colaborador) => {
      const matchNome = colaborador.nome
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "Todos" || colaborador.status === statusFilter;

      return matchNome && matchStatus;
    });
  }, [search, statusFilter]);

  const colaboradoresRecentes = [...colaboradoresFiltrados]
    .sort((a, b) => new Date(b.entrada) - new Date(a.entrada))
    .slice(0, 5);

  return (
    <section className="home-container">
      <section className="stats-grid">
        <StatCard
          title="Total de colaboradores"
          value={totalColaboradores}
          description="Quantidade total cadastrada no sistema"
        />

        <StatCard
          title="Colaboradores ativos"
          value={totalAtivos}
          description="Pessoas atualmente em atividade"
        />

        <StatCard
          title="Colaboradores inativos"
          value={totalInativos}
          description="Pessoas afastadas ou desligadas"
        />

        <StatCard
          title="Setores"
          value={totalSetores}
          description="Áreas diferentes encontradas no mock"
        />
      </section>
    </section>
  );
}

export default Home;
