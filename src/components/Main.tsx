import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typewriter from "typewriter-effect";
import "../assets/styles/Main.scss";
import { TypeWriterLabels } from "../constants";
import profile from "../assets/images/profile.webp";

function Main() {
  return (
    <div className="container">
      <section className="about-section" aria-label="About Abdulrahman Bashir">
        <div className="image-wrapper">
          <img src={profile} alt="Abdulrahman Bashir — Senior Frontend Engineer" width={150} height={150} />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/AbdulrahmanAlaa"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulrahmanalaaeldeen/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Abdulrahman Bashir</h1>
          <p>Senior Software Engineer</p>
          <h4 className="typewriter-text">
            <Typewriter
              options={{
                strings: [
                  TypeWriterLabels.first,
                  TypeWriterLabels.second,
                  TypeWriterLabels.third,
                  TypeWriterLabels.fourth,
                  TypeWriterLabels.fifth,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h4>
          <div className="mobile_social_icons">
            <a
              href="https://github.com/AbdulrahmanAlaa"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulrahmanalaaeldeen/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
