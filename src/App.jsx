import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { FaBell, FaUser } from "react-icons/fa";
import Login from "./Components/Login/login";
import ColaboradoresGrid from "./Components/Colaboradores/colaboradores";
import Home from "./Components/home/home";
import SideBar from "./Components/SideBar/sidebar";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogin = (user, password) => {
    if (user === "raphaelf" && password === "Raphael00") {
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
              </Routes>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
