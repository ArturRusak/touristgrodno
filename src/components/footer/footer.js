import React from 'react';
import './footer.css';

function Footer() {
  return(
    <footer>
      <div className={"footer-content"}>
        <div className={"footer-logo"}>
          <a href={"#"} title={"home"} className={"footer-logo-text"}>H R D N</a>
          <span>Hrodna, BLR</span>
        </div>
        <div className={"footer-description"}>
          <a
            href={"https://www.facebook.com/artur.rusak.5"}
            target={"_blank"}
            title={"Developer"}
          >
            Developed by Artur Rusak
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;