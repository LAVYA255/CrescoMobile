import React from "react";
import DashboardCard from "../components/DashboardCard";
import { dashboardCards } from "../data/dashboardData";

const Dashboard = () => (
  <div className="dashboard">
    {dashboardCards.map(card => (
      <DashboardCard key={card.id} {...card} />
    ))}
    {/* ...existing code... */}
  </div>
);

export default Dashboard;