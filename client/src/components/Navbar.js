import React from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => (
 

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">News Bug</NavLink>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/saved">Saved</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/sports">Sports</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/business">Business</NavLink>
      </li>
    </ul>
  </div>
</nav>



)



export default Navbar;


