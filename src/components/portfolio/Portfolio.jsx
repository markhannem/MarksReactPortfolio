import "./portfolio.css";

import React from "react";

const Portfolio = ({ img }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <img src={img} alt="" className="p-img" />
    </div>
  );
};

export default Portfolio;
