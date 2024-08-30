import React from 'react'
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const username = location.state?.username || 'Guest';
  return (
    <div className="dashboard-container">
    <h1 className="welcome-message">Welcome, {username}!</h1>
  </div>
  )
}

export default Dashboard;
