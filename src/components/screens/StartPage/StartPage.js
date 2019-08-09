import React from 'react';
import { Content, Slider } from "../../index";
import { showPlacelist } from '../../../constants';
import "./startPage.css";


function StartPage() {
  return (
    <React.Fragment>
      <h1>Hrodna</h1>
      <Slider/>
      <h2>The main attractions of Hrodna</h2>
      <div className={"showplace-list"}>
        {showPlacelist.map((item, index) => (
          <a key={index} className={"showplace-item-link"} href={item.linkMore}>
            <div className={"showplace-item"}>
              <div className={"showplace-item-top"}>
                <img
                  className={"showplace-item-img"}
                  src={item.img}
                  alt={item.imgAlt}
                  title={item.imgTitle}
                />
                <h3 className={"showplace-item-title"}>{item.title}</h3>
              </div>
              <p className={"showplace-item-description"}>{item.shortDescription}</p>
            </div>
          </a>
        ))}
      </div>
    </React.Fragment>
  );
}

export default StartPage;