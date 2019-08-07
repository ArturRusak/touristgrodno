import React from "react";
import { NavLink } from "react-router-dom";

import './navigation.css';


function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/showplaces">ShowPlaces</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/museums">Museums</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;