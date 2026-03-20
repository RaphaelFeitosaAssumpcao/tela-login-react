import React from "react";

function StatCard({ title, value, description }) {
  return (
    <div className="stat-card">
      <span className="stat-card-title">{title}</span>
      <strong className="stat-card-value">{value}</strong>
      {description ? (
        <p className="stat-card-description">{description}</p>
      ) : null}
    </div>
  );
}

export default StatCard;
