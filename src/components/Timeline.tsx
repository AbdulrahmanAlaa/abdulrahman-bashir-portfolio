import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Mid 2019 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Chapter Lead Frontend - Talabat (Delivery Hero SE) </h3>
            <h4 className="vertical-timeline-element-subtitle">Dubai, United Arab Emirates</h4>
            <div className="timeline-content">
              <h4>
                📲 Instagram-style Video Stories Feature (2021 – Present)
              </h4>
              <ul>
                <li>Led the design and development of an interactive Stories experience, similar to Instagram, built using Flutter and integrated across Talabat’s mobile platforms.</li>
                <li>Enabled adaptive video streaming by integrating HLS playback via AWS S3 and optimizing user experience with smooth gesture interactions (hold-to-pause, tap-to-reset, auto-play).</li>
                <li>Managed complex playback behavior through a clean BLoC architecture, ensuring state consistency and performance across devices.</li>
              </ul>
              <h4>
                🎥 Video Processing Pipeline using FFmpeg + AWS Lambda (2023)
              </h4>
              <ul>
                <li>Architected a serverless video processing solution using AWS Lambda, triggered by S3 events to automatically transcode uploaded videos into multiple HLS resolutions (240p, 360p, 480p, 720p).</li>
                <li>Converted Bash-based FFmpeg commands into a scalable backend workflow, dramatically reducing manual video preparation and improving time-to-live for marketing videos.</li>
              </ul>
              <h4>
                ✅ Test-Driven Development & Quality Focus
              </h4>
              <ul>
                <li>
                  Achieved 100% test coverage on the video stories module with unit and widget tests using bloc_test, mocktail, and flutter_test.
                </li>
                <li>
                  Simulated real playback scenarios by mocking video controllers and user interactions, ensuring rock-solid user experience in production.
                </li>
              </ul>
              <h4>
                📈 Performance Optimization & Monitoring
              </h4>
              <ul>
                <li>
                  Focused on maximum device compatibility by enforcing H.264 encoding standards for videos, improving playback reliability across Android, iOS, and web platforms.
                </li>
                <li>
                  Integrated observability tools like New Relic and internal dashboards to monitor: Playback errors - Feature adoption - Engagement KPIs
                </li>
                <li>
                  Partnered with the design, product, and marketing teams to iterate and enhance the Stories feature based on real-time data.
                </li>
              </ul>
              <h4>
                🤝 Cross-functional Collaboration
              </h4>
              <ul>
                <li>
                  Acted as a technical bridge between frontend, backend, DevOps, and product teams.
                </li>
                <li>
                  Translated business goals into engineering solutions — whether aligning backend contracts, optimizing APIs, or managing deployment timelines.
                </li>
                <li>
                  Championed clean code practices, scalability, and modular architecture across mobile features.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 – Mid 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Full-Stack Engineer - Crossover (Contract Role with Upland)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <div className="timeline-content">
              <p>Selected among the top 3% of global talent.</p>
              <p>Worked with AngularJS 1.5 and migrated to Angular 4.5.</p>
              <p>Built dashboards and reports using SQL Server Reporting Services (SSRS).</p>
              <p>Compensation matched a lead-level role in Egypt.</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 – 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer - Vodafone Germany</h3>
            <h4 className="vertical-timeline-element-subtitle"> Cairo, Egypt</h4>
            <div className="timeline-content">
              <p>Led a frontend migration from AngularJS 1.5 to Angular 4.</p>
              <p>Managed and mentored 3 junior engineers.</p>
              <p>Wrote design documents and aligned backend contracts with frontend.</p>
              <p>Collaborated with German DevOps team for release management.</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2017"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Teaching Assistant at Information Technology Institute (ITI)</h3>
            <h4 className="vertical-timeline-element-subtitle">Cairo, Egypt</h4>
            <div className="timeline-content">
              <h4>
                Department Management Activities:
              </h4>
              <ul>
                <li>Training Tracks Planning.</li>
                <li>Developing software solutions(ITI Admission System) at https://iti.gov.eg</li>
                <li>Admission, Interviewing &amp; Selection.</li>
                <li>Operations Management &amp; Scheduling.</li>
                <li>Business Development &amp; Engagement.</li>
              </ul>
              <h4>
                Teaching Assistant Activities:
              </h4>
              <ul>
                <li>
                  Conducting Lectures, Labs &amp; Preparing Course Materials.
                </li>
                <li>
                  Projects Supervision.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;