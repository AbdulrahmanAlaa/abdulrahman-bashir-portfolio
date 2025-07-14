import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Talabat Mobile */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Mid 2023 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend - Talabat (Delivery Hero SE)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dubai, United Arab Emirates
            </h4>
            <div className="timeline-content">
              <h4>📲 Instagram-style Video Stories Feature (2024 – Present)</h4>
              <ul>
                <li>
                  Led the design and development of an interactive Stories
                  experience, similar to Instagram, built using Flutter and
                  integrated across Talabat’s mobile platforms.
                </li>
                <li>
                  Enabled adaptive video streaming by integrating HLS playback
                  via AWS S3 and optimizing user experience with smooth gesture
                  interactions (hold-to-pause, tap-to-reset, auto-play).
                </li>
                <li>
                  Managed complex playback behavior through a clean BLoC
                  architecture, ensuring state consistency and performance
                  across devices.
                </li>
              </ul>
              <ul>
                <li>
                  Architected a serverless video processing pipeline with AWS
                  Lambda and S3 to automatically transcode videos into multiple
                  HLS resolutions.
                </li>
                <li>
                  Scaled backend video workflow by converting FFmpeg commands,
                  significantly reducing manual preparation time.
                </li>
                <li>
                  Ensured high quality by achieving 100% test coverage on the
                  video stories module with unit and widget tests.
                </li>
                <li>
                  Guaranteed a reliable user experience by simulating real-world
                  playback scenarios and user interactions in tests.
                </li>
                <li>
                  Maximized device compatibility and playback reliability by
                  enforcing H.264 encoding standards.
                </li>
                <li>
                  Implemented robust monitoring using New Relic and internal
                  dashboards to track playback errors, feature adoption, and
                  KPIs.
                </li>
                <li>
                  Drove feature enhancements by collaborating with design,
                  product, and marketing teams using real-time data.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Talabat website Stability */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Mid 2019 - Mid 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Frontend Engineer - Talabat (Delivery Hero SE)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dubai, United Arab Emirates
            </h4>
            <div className="timeline-content">
              <h4>Website Modernization & Performance Monitoring</h4>
              <ul>
                <li>
                  Led the migration of the consumer-facing website from
                  AngularJS with .NET Framework 4 to a modern stack using React
                  and Next.js, improving performance, maintainability, and SEO
                  readiness.
                </li>
                <li>
                  Enhanced SEO by implementing JSON-LD structured data and
                  optimizing metadata.
                </li>
                <li>
                  Integrated New Relic for performance monitoring, creating
                  tailored dashboards to track key web vitals, backend health,
                  and user behavior.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          {/* Talabat website PWA */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Mid 2019 - Mid 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Engineer - Talabat (Delivery Hero SE)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dubai, United Arab Emirates
            </h4>
            <div className="timeline-content">
              Built and maintained a PWA using Ionic, specifically targeting
              weak/low-end devices in Talabat markets.
            </div>
          </VerticalTimelineElement>

          {/* Crossover */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 – Mid 2019"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Full-Stack Engineer - Crossover (Contract Role with Upland)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <div className="timeline-content">
              <p>Selected among the top 3% of global talent.</p>
              <p>Worked with AngularJS 1.5 and migrated to Angular 4.5.</p>
              <p>
                Built dashboards and reports using SQL Server Reporting Services
                (SSRS).
              </p>
              <p>Compensation matched a lead-level role in Egypt.</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 – 2018"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Software Engineer - Vodafone Germany
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              Cairo, Egypt
            </h4>
            <div className="timeline-content">
              <p>Led a frontend migration from AngularJS 1.5 to Angular 4.</p>
              <p>Managed and mentored 3 junior engineers.</p>
              <p>
                Wrote design documents and aligned backend contracts with
                frontend.
              </p>
              <p>
                Collaborated with German DevOps team for release management.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2017"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Teaching Assistant at Information Technology Institute (ITI)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Cairo, Egypt</h4>
            <div className="timeline-content">
              <h4>Department Management Activities:</h4>
              <ul>
                <li>Training Tracks Planning.</li>
                <li>
                  Developing software solutions(ITI Admission System) at
                  https://iti.gov.eg
                </li>
                <li>Admission, Interviewing &amp; Selection.</li>
                <li>Operations Management &amp; Scheduling.</li>
                <li>Business Development &amp; Engagement.</li>
              </ul>
              <h4>Teaching Assistant Activities:</h4>
              <ul>
                <li>
                  Conducting Lectures, Labs &amp; Preparing Course Materials.
                </li>
                <li>Projects Supervision.</li>
              </ul>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
