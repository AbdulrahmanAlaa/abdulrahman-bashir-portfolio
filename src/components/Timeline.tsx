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
          {/* Talabat Mobile — Home Squad (Current) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Mid 2023 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Software Engineer — Home Squad, Talabat (Delivery Hero SE)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dubai, United Arab Emirates
            </h4>
            <div className="timeline-content">
              <h4>🏠 Home Screen & Mobile Platform (Flutter)</h4>
              <ul>
                <li>
                  Built the <strong>Home CMS platform</strong> as a microfrontend React 18 plugin — enabling marketing to manage screen components, experiments, and campaigns across 8 markets without mobile releases.
                </li>
                <li>
                  Led <strong>Sentry telemetry migration</strong> — designed the ComponentTracer.auto pattern with SLI dashboards (STTI, TTI, NTS), establishing the reference implementation adopted across the tribe.
                </li>
                <li>
                  Drove <strong>Email OTP login experiment</strong> — investigated Sample Ratio Mismatch using BigQuery, launched v2 experiment, and added SRM observability to New Relic dashboards.
                </li>
                <li>
                  Architected <strong>component isolation</strong> — wrapping all screen components via backend API to enforce Flutter layout constraints without manual template updates.
                </li>
                <li>
                  Shipped <strong>bottom navigation</strong> with header changes, offline fallback, stacked navigation, and localization mapping behind experiments.
                </li>
                <li>
                  Led <strong>Braze SDK upgrade</strong> — cross-platform migration, Flutter video player compliance, CI/CD pipeline optimization with Android 35 support.
                </li>
              </ul>

              <h4>🚨 Incident Response & Reliability</h4>
              <ul>
                <li>
                  Resolved home screen availability drop (99.75% → 99.2%) by identifying noisy alerts being ignored, then refined alert thresholds with the Security team.
                </li>
                <li>
                  Fixed splash screen blocking on iOS 13.40.0 — identified FWF SDK async/await blocking main thread, coordinated weekend deployment.
                </li>
                <li>
                  Deep-dived Strapi CMS on EID day — applied direct DB fix to unblock banner launch when component targeting stored incorrect values.
                </li>
                <li>
                  Coordinated with Security team to resolve Cloudflare firewall rules blocking home screen (403 errors from DigitalOcean ASN/Dart user-agent fingerprints).
                </li>
              </ul>

              <h4>📊 Observability & Data</h4>
              <ul>
                <li>
                  Defined SLIs for all owned flows, added SRM tracking to New Relic dashboards, and prepared Sentry migration for the team.
                </li>
                <li>
                  Validated BigQuery homescreen_loaded attributes and self-discovered Looker Studio dashboards for experiment tracking.
                </li>
                <li>
                  Removed 989 lines of dead code through MainDB feature flag cleanup across 25 files.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Talabat — In-App Marketing & Splash Screen */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Mid 2020 - Mid 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer — In-App Marketing, Talabat (Delivery Hero SE)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dubai, United Arab Emirates
            </h4>
            <div className="timeline-content">
              <h4>📱 In-App Marketing (Server-Driven UI)</h4>
              <ul>
                <li>
                  Built and maintained the <strong>IPM platform</strong> — a Server-Driven UI system on customized Strapi CMS that enabled marketing to ship banners, campaigns, and home screen components to mobile <strong>without requiring app releases</strong>.
                </li>
                <li>
                  <strong>Business impact:</strong> Shortened time-to-market for campaigns and eliminated external vendor costs by bringing all content management in-house.
                </li>
                <li>
                  Created the <strong>Screen Ops Portal</strong> plugin — environment setup, Drone CI/CD for staging/production, authentication via Okta tokens, and dynamic time targeting with cron support.
                </li>
                <li>
                  Built <strong>n8n automation</strong> flows integrating Airtable → CMS with Slack notifications, reducing manual operational steps for marketing teams.
                </li>
              </ul>

              <h4>🎬 Video Reels & Splash Screen</h4>
              <ul>
                <li>
                  Led the design and development of an interactive <strong>Stories experience</strong> (Instagram-style) built in Flutter with HLS adaptive streaming via AWS S3.
                </li>
                <li>
                  Architected a <strong>serverless video processing pipeline</strong> with AWS Lambda and S3 to transcode videos into multiple HLS resolutions.
                </li>
                <li>
                  Evolved the <strong>splash screen</strong> from shimmer POC to multi-country video overlay — implementing cache-first strategy, FWF kill switch, fade-out animations, and SplashOverlay_TTI monitoring.
                </li>
                <li>
                  Achieved 100% test coverage on the video stories module with unit and widget tests.
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
