import React from "react";
import AccessCard from "../Components/AccessCard";
import "../css/accessControl.css";
export default function AccessControl() {
  const screens = [
    { id: 1, title: "Dashboard", description: "Tela principal do sistema" },
    { id: 2, title: "Colaboradores", description: "Gestão de colaboradores" },
    { id: 3, title: "Financeiro", description: "Controle financeiro" },
    { id: 4, title: "Relatórios", description: "Relatórios do sistema" },
    { id: 5, title: "Configurações", description: "Configurações gerais" },
    { id: 6, title: "Permissões", description: "Controle de permissões" },
    { id: 7, title: "Estoque", description: "Controle de estoque" },
    { id: 8, title: "Vendas", description: "Controle de vendas" },
  ];
  return (
    <div className="access-container">
      <h2>Controle de Acessos</h2>
      <div className="access-grid">
        {screens.map((screen) => (
          <AccessCard
            key={screen.id}
            title={screen.title}
            description={screen.description}
            onRoleAccess={() => alert(`Cargo - ${screen.title}`)}
            onUserAccess={() => alert(`Colaborador - ${screen.title}`)}
          />
        ))}
      </div>
    </div>
  );
}
