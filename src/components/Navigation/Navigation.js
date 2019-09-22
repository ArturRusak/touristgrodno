import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { NAVIGATION } from "../../constants";
import './navigation.css';

//TODO restyling of button
function Navigation() {
  const visible = 'visible';
  const hidden = 'hidden';
  const [navClass, setNavClass] = useState(hidden);
  const isVisibleClass = navClass === visible;

  const toggleClass = () => setNavClass(isVisibleClass ? hidden : visible);

  return (
    <div>
      <nav className={navClass}>
        <ul>
          {NAVIGATION.map((item, index) =>
            <li key={`${index}-li`}>
              <NavLink
                to={item.url}
                onClick={toggleClass}
              >
                {item.title}
              </NavLink>
            </li>)}
        </ul>
      </nav>
      <button
        id="nav-button"
        className="nav-button"
        onClick={toggleClass}
      >
        {isVisibleClass ?
          <i className="fa fa-times fa-2x" aria-hidden="true"></i> :
          <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        }
      </button>
    </div>
  )
}

export default Navigation;