import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import '../../assets/Resume/book-solid.svg'
import index from "react-typical";



const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="github-link">
          <span>{props.Link1 ? props.Link1 : ""}</span>
        </div>
        <div className="hosted-link">
          <span>{props.Link2 ? props.Link2 : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    {
      label: "Education",
      //logoSrc: <FontAwesomeIcon icon="fa-solid fa-school" />,
    },
    {
      label: "Work History",
      //logoSrc: <FontAwesomeIcon icon="fa-solid fa-briefcase" />,
    },
    {
      label: "Programming Skills",
      //logoSrc: <FontAwesomeIcon icon="fa-solid fa-book-file"/>
    },
    {
      label: "Projects",
      logoSrc: "book-solid.svg",
    },
    {
      label: "Interests",
      //logoSrc: <FontAwesomeIcon icon="fa-solid fa-book-skull" />,
    },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Netflix Clone",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A Streaming service clone utilizing imdb api.",
      subHeading: "Technologies Used: React JS, Bootstrap",
      Link1: (
        <a
          className="git-link"
          href="https://github.com/kavancamp/netflix-clone"
        >
          Code
        </a>
      ),
      Link2: (
        <a
          className="host-link"
          href={"https://netflix-clone-9bab9.web.app"}
          alt="B"
        >
          Hosted Site
        </a>
      ),
    },
    {
      title: "Harry Potter Quote Generator",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A random quote generator with speech synthesis.",
      subHeading: "Technologies Used: React JS",
      Link1: (
        <a
          className="git-link"
          href="https://github.com/kavancamp/harry-potter-quote-generator"
        >
          Code
        </a>
      ),
      Link2: (
        <a
          className="host-link"
          href="https://kavancamp.github.io/harry-potter-quote-generator"
        >
          Hosted Site
        </a>
      ),
    },
    {
      title: "Amazon Clone",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with Stripe payment system integration",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
      Link1: (
        <a
          className="git-link"
          href="https://github.com/kavancamp/amazon-clone"
        >
          Code
        </a>
      ),
      Link2: (
        <a className="host-link" href="https://clone-946c0.web.app/">
          Hosted Site
        </a>
      ),
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container education" key="education">
      <ResumeHeading
        heading={"CodeCademy"}
        subHeading={"Full-Stack Software Engineering -JS focus"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"PennFoster Career School"}
        subHeading={"Highschool Diploma"}
        fromDate={"2007"}
        toDate={"2009"}
      />
      <ResumeHeading
        heading={"Codecademy"}
        subHeading={"API Development with Swagger and OpenAPI Certificate"}
        fromDate={"2022"}
        toDate={"2022"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Control Room Operator"}
          subHeading={"Vestas Americas"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            • Performed advanced-level wind turbine remote operations and
            support. <br />
            • Proficient troubleshooting and use of diagnostic tools. <br />
            • SCADA analysis
            <br />
          </span>
        </div>
        <ResumeHeading
          heading={"Network Operations Center Engineer"}
          subHeading={"Source Global"}
          fromDate={"2020"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            • Monitored and analyzed data to determine root cause analysis;
            Maintain utmost data integrity <br />
            • Provided technical support to SOURCE Global customer base and
            Field Engineers <br />
            • Ran SQL queries and compiled necessary data.
            <br />
            <br />
          </span>
          <br />
        </div>
        <ResumeHeading
          heading={"O&M Tech IV"}
          subHeading={"Enable Midstream"}
          fromDate={"2018"}
          toDate={"2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            • Monitored SCADA system, changed pump and delivery schedules to
            maintain product quality, safe operating conditions and
            cost-efficient operations.
            <br />
            • Examined equipment daily, adjusted monitoring controls to maintain
            safety standards.
            <br />
            • Logged hourly pressures and flows.
            <br />
          </span>
        </div>
        <br />
        <ResumeHeading
          heading={"Control Room Operator"}
          subHeading={"BakkenLink-Marathon Petroleum "}
          fromDate={"2014"}
          toDate={"2018"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            • Troubleshooting SQL queries and reports, SCADA Database and
            graphic work.
            <br />
            • Monitored and adjusted flows to maintain pressures through the
            lines, as well as meet daily quotas, via our SCADA system.
            <br />
            • Tracked and recorded status of operational systems using
            applicable journals and control system tools.
            <br />
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container projects" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          /*fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}*/
          Link1={projectsDetails.Link1}
          Link2={projectsDetails.Link2}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Reading"
        description="Apart from being a coder, I use my love of learning to read as much as I can, anything from A Thousand Splendid Suns by Khaled Housenni, to the ACOTAR series by Sara J. Maas."
      />
      <ResumeHeading
        heading="Fitness"
        description="Listening to music while lifting weights is something I can never compromise with, and often it's the best stress reliever that I can get my hands on."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
       <img
          className="bullet-logo"
          src={`${bullet.logoSrc}`}
          alt=""
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
