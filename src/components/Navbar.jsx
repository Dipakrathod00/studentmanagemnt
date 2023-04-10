import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Management
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link " href="#">
                <Link
                  to="student"
                  className="text-decoration-none text-secondary"
                >
                  Student
                </Link>
              </a>
              <a class="nav-link" href="#">
                <Link to="/" className="text-decoration-none text-secondary">
                  Dashboard
                </Link>
              </a>
              <a class="nav-link" href="#">
                <Link
                  to="department"
                  className="text-decoration-none text-secondary"
                >
                  Department
                </Link>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
