import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from '../index';
import './header.css';

const HEADER_POSITION = {
  sticky: 'sticky',
  hidden: 'hidden'
};

function Header() {
  const {initial, sticky, hidden} = HEADER_POSITION;
  const [headerPosition, setHeaderPosition] = useState(initial);

  useEffect(() => {
    // Detect scroll to bottom
    let prevPos = 0;
    window.addEventListener('scroll', () => {

      if (window.pageYOffset < 150) {

        prevPos = window.pageYOffset;
        setHeaderPosition(null);

      } else if (window.pageYOffset > prevPos) {

        prevPos = window.pageYOffset;
        setHeaderPosition(hidden);

      } else {

        prevPos = window.pageYOffset;
        setHeaderPosition(sticky)
      }
    });
  }, []);

  const setClass = () => {
    if (headerPosition && headerPosition === sticky) {
      return sticky;
    } else if (headerPosition) {
      return hidden;
    }
  };

  return (
    <header className={setClass()}>
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