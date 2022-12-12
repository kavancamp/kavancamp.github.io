import React, { useState, useRef } from "react";
import Typical from "react-typical";
import { toast } from "react-toastify";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../container/Footer/Footer";
import "./Contact.css";
import emailjs from "emailjs-com";

export default function Contact(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  // eslint-disable-next-line
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const submitForm = (e) => {
    // eslint-disable-next-line
    let data = { name, email, message };
    setBool(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mryay1t",
        "template_dej4dth",
        "#contact-form",
        "kZ8TxUASbtp2iM2Wc"
      )
      .then(
        function (response) {
          setBanner(response.data);
          toast.success(response.data);
          setBool(false);
          setName("");
          setEmail("");
          setMessage("");
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
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
        <div className="back-form">
          <form id="contact-form" ref={form} onSubmit={submitForm}>
            <p>{banner}</p>
            <label>Name</label>
            <input
              name="name"
              id="name"
              type="text"
              onChange={handleName}
              value={name}
            />

            <label>Email</label>
            <input
              name="email"
              id="email"
              type="email"
              onChange={handleEmail}
              value={email}
            />

            <label>Message</label>
            <textarea
              name="message"
              id="message"
              type="text"
              onChange={handleMessage}
              value={message}
            />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
