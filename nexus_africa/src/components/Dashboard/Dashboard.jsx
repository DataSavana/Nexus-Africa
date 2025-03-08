import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => navigate("/dashboard")}>Home</li>
          <li onClick={() => navigate("/dashboard")}>Data Contributions</li>
          <li onClick={() => navigate("/dashboard")}>Model Training</li>
          <li onClick={() => navigate("/dashboard")}>Model Fine-tuning</li>

          <li onClick={() => navigate("/dashboard/")}>APIs</li>

          <li onClick={() => navigate("/dashboard")}>Communitys</li>
          <li onClick={() => navigate("/dashboard")}>Docs</li>
          <li onClick={() => navigate("/dashboard")}>Settings</li>
          <li onClick={handleLogout} className="logout">
            Logout
          </li>
        </ul>
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-main">
        <div className="header">
          <h1>Welcome, {auth.currentUser?.displayName || "User"}</h1>
        </div>

        <div className="content">
          <h2>Dashboard Coming Soon...</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
