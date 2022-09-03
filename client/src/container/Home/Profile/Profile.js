import React from "react";
import "./Profile.css";
import Typical from "react-typical";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/keenah-vancampenhout/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/kavancamp">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.facebook.com/keenah.vancampenhout/">
                <i className="fa fa-facebook-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Keenah</span>
            </span>
          </div>
          <div className="profile-details-role">
            <div className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Engthusiastic Dev 🧙🏻‍♀️",
                    1000,
                    "Full Stack Developer 🤖",
                    1000,
                    "MERN Stack Dev 👩🏼‍💻",
                    1000,
                    "React/React Native Dev 🫀",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end blahblah
                lorem ipsum
              </span>
            </div>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire me </button>
            <a href="Profile (4).pdf" download="Profile (4).pdf">
              <button className="btn highlighted-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
