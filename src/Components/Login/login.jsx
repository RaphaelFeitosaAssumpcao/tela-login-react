import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Enviando os dados: " + userName + " - " + password);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <input
            type="email"
            placeholder="Coloque seu e-mail...."
            onChange={(e) => setUserName(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div>
          <input
            type="password"
            placeholder="Coloque sua senha...."
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label htmlFor="remenber">
            <input type="checkbox" /> Lembrar-me
          </label>
          <a href="#">Esqueci minha senha</a>
        </div>

        <button type="submit">Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Cadastre-se</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
