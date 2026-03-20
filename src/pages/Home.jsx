import React, { useMemo, useState } from "react";
import "../css/home.css";
import "../css/cards.css";
import StatCard from "../Components/home/statCard";
import { colaboradoresMock } from "../data/colaboradores";

function Home() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cargo: "",
    sala: "",
    gestor: "",
    diretor: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const totalColaboradores = colaboradoresMock.length;

  const totalAtivos = colaboradoresMock.filter(
    (c) => c.status === "Ativo",
  ).length;

  const totalInativos = colaboradoresMock.filter(
    (c) => c.status === "Inativo",
  ).length;

  const totalSetores = new Set(colaboradoresMock.map((c) => c.sala)).size;

  const colaboradoresFiltrados = useMemo(() => {
    return colaboradoresMock.filter((c) => {
      const matchNome = c.nome.toLowerCase().includes(search.toLowerCase());

      const matchStatus = statusFilter === "Todos" || c.status === statusFilter;

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
      <div className="register">
        <div className="header">
          <p>Cadastro de Colaboradores</p>
          <button className="button" type="button">
            Adicionar
          </button>
        </div>
        <div className="register-colab">
          <form className="form-grid">
            <div className="form-group">
              <label>Nome</label>
              <input
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                type="text"
                placeholder="Digite o nome"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="text"
                placeholder="Digite o email"
              />
            </div>

            <div className="form-group">
              <label>Cargo</label>
              <input
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                type="text"
                placeholder="Digite o cargo"
              />
            </div>

            <div className="form-group">
              <label>Sala</label>
              <input
                name="sala"
                value={formData.sala}
                onChange={handleChange}
                type="text"
                placeholder="Digite a sala"
              />
            </div>

            <div className="form-group">
              <label>Gestor</label>
              <input
                name="gestor"
                value={formData.gestor}
                onChange={handleChange}
                type="text"
                placeholder="Digite o gestor"
              />
            </div>

            <div className="form-group">
              <label>Diretor</label>
              <input
                name="diretor"
                value={formData.diretor}
                onChange={handleChange}
                type="text"
                placeholder="Digite o diretor"
              />
            </div>

            <div className="form-group full-width">
              <label>Status</label>
              <input
                name="status"
                value={formData.status}
                onChange={handleChange}
                type="text"
                placeholder="Ativo / Inativo"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Home;
