import React from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Dashboard;
