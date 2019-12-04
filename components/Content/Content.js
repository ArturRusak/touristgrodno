import React from 'react';

function Content({history, children}) {
  return (
    <div className={"content-body"}>
      <div className={"content-wrapper"}>
        {children}
      </div>
    </div>
  );
}

export default Content;
