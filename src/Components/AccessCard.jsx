import React from "react";
import "../css/accessCard.css";

const AccessCard = ({ title, description, onRoleAccess, onUserAccess }) => {
  return (
    <article className="access-card">
      <div>
        <h3 className="access-card-title">{title}</h3>
        <p className="access-card-description">{description}</p>
      </div>
      <div className="access-card-buttons">
        <button type="button" className="btn-primary" onClick={onRoleAccess}>
          Cargo
        </button>
        <button type="button" className="btn-secundary" onClick={onUserAccess}>
          Colaborador
        </button>
      </div>
    </article>
  );
};

export default AccessCard;
