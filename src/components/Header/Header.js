import React from 'react';
import { Navigation } from '../index';
import './header.css';

function Header() {
  return(
    <header>
      <div className={"header-content"}>
        <div className={"header-logo"}>
          <a href={"#"} title={"home"} className={"header-logo-text"}>H R D N</a>
          <span>Hrodna, BLR</span>
        </div>
        <Navigation/>
        {/*        <div>

        </div>
        <div className={"header-description"}>1128 year.</div>*/}
      </div>
    </header>
  );
}

export default Header;