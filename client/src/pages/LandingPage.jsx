import React, { useState } from "react";
import "../styles/landingpage.css";

import socialeXLogo from "../images/SocialeX.png";
import About1 from "../images/about-1.png";
import About2 from "../images/about-2.jpg";

import Login from "../components/Login";
import Register from "../components/Register";

const LandingPage = () => {
  const [isLoginBox, setIsLoginBox] = useState(true);

  return (
    <div className="landingPage">
      <div className="landing-header">
        <span className="landing-header-logo">
          <img src={socialeXLogo} alt="" />
        </span>
        <ul>
          <li className="header-li">
            <a href="#home">Home</a>
          </li>
          <li className="header-li">
            <a href="#about">About</a>{" "}
          </li>
          <li className="header-li">
            <a href="#home">Join now</a>
          </li>
        </ul>
      </div>

      <div className="landing-body">
        <div className="landing-hero" id="home">
          <div className="landing-hero-content">
            <h1>Nixle</h1>
            <p>
              Welcome to SocialSphere, the ultimate realm where creativity knows
              no bounds. Dive into a world where vibrant communities come alive,
              and unique quirks are not just embraced but celebrated.
              SocialSphere is your playground for connecting, creating, and
              exploring in ways you've never imagined. Join us and experience
              the excitement of a platform designed for the wildly imaginative
              and the wonderfully eclectic.{" "}
            </p>

            <div className="authentication-form">
              {isLoginBox ? (
                <Login setIsLoginBox={setIsLoginBox} />
              ) : (
                <Register setIsLoginBox={setIsLoginBox} />
              )}
            </div>
          </div>

          <div className="landing-hero-image">
            <div id="landing-image-sidebar-left"></div>
            <div className="back"></div>
            <div id="landing-image-sidebar-right"></div>
          </div>
        </div>

        <div className="landing-about" id="about">
          <div className="about-1">
            <img src={About1} className="about-1-img" alt="" />
            <div className="about-1-content">
              <h3>Stay Connected</h3>
              <p>
                Nixle bridges the gap between old friends, no matter where they
                are in the world. Stay connected effortlessly by following their
                profiles, catching up on their latest updates, and engaging with
                their posts. Share your favorite memories and reminisce
                together, all within one seamless platform.
              </p>
              <a href="#home">Join now!!</a>
            </div>
          </div>
          <div className="about-2">
            <div className="about-2-content">
              <h3>Amplify Your Voice</h3>
              <p>
                Nixle empowers you to amplify your voice and share your unique
                perspective with a global audience. Whether you're an artist,
                writer, musician, or creator of any kind, Nixle offers the
                perfect stage to showcase your talent and gain the recognition
                you deserve..
              </p>
              <a href="#home">Join now!!</a>
            </div>
            <img src={About2} className="about-2-img" alt="" />
          </div>
        </div>

        <div className="footer">
          <p>All rights reserved - &#169; SocialeX.com</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
