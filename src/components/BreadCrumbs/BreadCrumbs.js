import { NAVIGATION } from "../../constants";
import { Link } from "react-router-dom";
import React from "react";

import './BreadCrumbs.css';

function BreadCrumbLink({url}) {
  const navLink = NAVIGATION.find(itemNav => itemNav.url === url);
  return (
    <Link
      className={'bread-crumb-link'}
      to={url}
    >
      {navLink.title}
    </Link>
  );
}

function BreadCrumbs({history}) {
  const pathUrl = history.location.pathname;
  const breadCrumbsUrl = ['/', pathUrl];

  return (
    <div className={'bread-crumbs-container'}>
      {breadCrumbsUrl.map((url, index) => <BreadCrumbLink key={`${index}-crumb`} url={url}/>)}
    </div>
  )
}

export default BreadCrumbs;
