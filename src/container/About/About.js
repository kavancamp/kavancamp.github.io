import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./About.css";

export default function About(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Full-Stack Engineer with knowledge of MERN stacks with redux, a knack of building applications with utmost efficiency. Strong professional, ready to be an asset for an organization.",
    highlights: {
      bullets: [
        "Full Stack web and mobile development",
        "Interactive Front End",
        "React",
        "Redux for State Management",
        "REST API",
        "Managing databases",
      ],
      heading: "A Few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-card">
          <div className="about-profile"></div>
          <div className="about-details">
            <span className="about-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-options">
              <a href="./Kvc_portfolio.pdf" download>
                <button className="btn highlighted-btn">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
