import React from "react";
import "./about.css";
import Cook from "../../img/me_cook.png";
import Award from "../../img/chemaward.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={Cook} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">Into many trades with all its tricks</p>
        <p className="about-desc">
          27-Year old Newfoundlander who recently found a passion for
          programming. Always interested in technology when i started
          video/picture editing and later moved onto taking apart electronics
          and computers. Im into other things such as: <br />
          Basketball, fitness, fishing, rock-hounding, and photography!
        </p>
        <div className="about-award">
          <img src={Award} alt="" className="about-award-img" />
          <div className="about-award-texts">
            <h4 className="about-award-title">
              Chemical Process Engineering Technology Graduate 2019
            </h4>
            <p className="about-award-desc">
              3.9 GPA and still retains a strong interest in processing of many
              kinds!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
