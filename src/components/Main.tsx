import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typewriter from 'typewriter-effect';
import '../assets/styles/Main.scss';
import { TypeWriterLabels } from "../constants";


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/C4D03AQEBa0faTfsotA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1652426457588?e=1749686400&v=beta&t=Tq7egP0QGpRAj0ssNgirvglrSIo6jmMaGtiH4I_Oisk" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AbdulrahmanAlaa" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/abdulrahmanalaaeldeen/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Abdulrahman Bashir</h1>
          <p>Senior Frontend Engineer</p>
          <p>
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
          </p>
          <div className="mobile_social_icons">
            <a href="https://github.com/AbdulrahmanAlaa" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/abdulrahmanalaaeldeen/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;