import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const webLabels = [
    "React",
    "TypeScript",
    "C#",
    "SASS",
    "SQL",
    "Newrelic",
    "Circuit Breaker",
    "NestJS",
    "NodeJS",
    "Middleware",
    "PostgreSQL",
    "Postman"
];

const devopsLabels = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const mobileLabels = [
    "Flutter",
    "Dart",
    "Firebase",
    "Android Studio",
    "video streaming",
    "video player",
    "HLS",
    "SQLite"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Web Development</h3>
                        <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {webLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                    <div className="skill">
                        {/* <FontAwesomeIcon icon={faAndroid} size="3x" /> */}
                        <FontAwesomeIcon icon={faApple} size="3x" />
                        <h3>Mobile Development</h3>
                        <p>
                            I have developed mobile applications using Flutter, focusing on creating user-friendly interfaces and seamless user experiences.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {mobileLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps & Automation</h3>
                        <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {devopsLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Expertise;