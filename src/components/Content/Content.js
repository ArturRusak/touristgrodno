import React from 'react';
import './content.css';
import {withRouter} from 'react-router';

//TODO add breadcrumbs
function Content({history, children}) {
  return(
    <div className={"content-body"}>
      <div className={"content-wrapper"}>
        {children}
      </div>
    </div>
  );
}

export default withRouter(Content);
