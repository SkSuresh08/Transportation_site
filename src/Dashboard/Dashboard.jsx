import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard-style.css";

const Dashboard = () => {
  return (
    <>
      <div className="dash-container">
        <div className="dash-login-container">
          <h1>Dashboard</h1> <br />
          
          <button>
            <Link className="login" to="/dashboard/login">
              User
            </Link>
          </button>
          <br />
          <br />
          <button>
            <Link className="Admin-login-btn" to="*">Admin
            </Link>
          </button>
        </div>
        <br />
      </div>
    </>
  );
};

export default Dashboard;
