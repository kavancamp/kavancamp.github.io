import React from "react";
import "./Profile.css";
import Typical from 'react-typical'

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
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

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Keenah</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1></h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
