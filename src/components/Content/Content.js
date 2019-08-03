import React from 'react';
import './content.css';

function Content(props) {
  const {children} = props;
  return(
    <div className={"content-body"}>
      <div className={"content-wrapper"}>
        {children}
      </div>
    </div>
  );
}

export default Content;