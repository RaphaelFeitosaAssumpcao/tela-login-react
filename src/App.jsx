import React, { useState } from "react";
import Login from "./Components/Login/login";
import ColaboradoresGrid from "./Components/Colaboradores/colaboradores";
import "./App.css";
import SideBar from "./Components/SideBar/sidebar";

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
            <ColaboradoresGrid />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
