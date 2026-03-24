import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { FaBell, FaUser } from "react-icons/fa";
import Login from "./pages/Login";
import ColaboradoresGrid from "./pages/Colaboradores";
import Home from "./pages/Home";
import Acessos from "./pages/Acessos";
import SideBar from "./Components/SideBar";
import { authCredentialsMock } from "./data/authCredentials";
import "./css/app.css";

const PAGE_TITLES = {
  "/": "Home",
  "/acessos": "Lista de Acessos",
  "/colaboradores": "Lista de colaboradores",
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { pathname } = useLocation();
  const pageTitle = PAGE_TITLES[pathname] ?? "Rotas";

  const handleLogin = (user, password) => {
    if (
      user === authCredentialsMock.user &&
      password === authCredentialsMock.password
    ) {
      setIsAuthenticated(true);
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className={`app-container ${!isAuthenticated ? "login" : ""}`}>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="main-content">
          <SideBar />
          <div className="page-content">
            <header className="page-header">
              <h1 className="page-header-title">{pageTitle}</h1>
              <div className="header-icons">
                <button
                  type="button"
                  className="header-icon-btn"
                  aria-label="Notificações"
                >
                  <FaBell />
                </button>
                <button
                  type="button"
                  className="header-icon-btn"
                  aria-label="Perfil"
                >
                  <FaUser />
                </button>
              </div>
            </header>
            <main className="page-main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/colaboradores"
                  element={
                    <ColaboradoresGrid
                      searchTerm={searchTerm}
                      onSearchChange={setSearchTerm}
                    />
                  }
                />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/acessos" element={<Acessos />} />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
