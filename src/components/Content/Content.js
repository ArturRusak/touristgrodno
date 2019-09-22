import React from 'react';
import './content.css';
import { withRouter } from 'react-router';

import { BreadCrumbs } from '../index';

function Content({history, children}) {
  const isHomeUrl = history.location.pathname === '/';
  return (
    <div className={"content-body"}>
      <div className={"content-wrapper"}>
        {!isHomeUrl && <BreadCrumbs history={history}/>}
        {children}
      </div>
    </div>
  );
}

export default withRouter(Content);
