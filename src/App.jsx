import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login/login";
import ColaboradoresGrid from "./Components/Colaboradores/colaboradores";
import Home from "./Components/home/home";
import SideBar from "./Components/SideBar/sidebar";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/colaboradores" element={<ColaboradoresGrid />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
