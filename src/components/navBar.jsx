import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/Movies_List/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/Movies_List/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/Movies_List/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/Movies_List/rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-item nav-link" to="/Movies_List/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/Movies_List/register">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
