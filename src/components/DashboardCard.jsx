import React from "react";

const DashboardCard = ({ title, value, icon }) => (
  <div className="dashboard-card">
    {/* Render icon based on the icon prop */}
    <div className="icon">{icon}</div>
    <div className="content">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  </div>
);

export default DashboardCard;
