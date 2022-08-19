import React from "react";
import "./intro.css";
import ME from "../../img/me.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hello! My name is </h2>
          <h1 className="intro-name">Mark Hannem </h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Full Stack Developer</div>
              <div className="intro-title-item">UX/UI Designer</div>
              <div className="intro-title-item">Competitive Gamer</div>
              <div className="intro-title-item">Chemist</div>
              <div className="intro-title-item">Chef</div>
            </div>
          </div>
          <p className="intro-desc">
            Third semester software development student who aspires to create
            sleek and modern web designs
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={ME} alt="" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
