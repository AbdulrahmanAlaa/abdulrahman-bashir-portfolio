import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faApple } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const webLabels = [
    "React",
    "TypeScript",
    "Next.js",
    "Strapi CMS",
    "React Query",
    "MobX",
    "C#",
    "SASS",
    "SQL",
    "New Relic",
    "NestJS",
    "NodeJS",
    "PostgreSQL",
    "REST APIs",
];

const devopsLabels = [
    "CI/CD",
    "Drone CI",
    "Docker",
    "Kubernetes",
    "AWS",
    "S3 Bucket",
    "AWS Lambda",
    "CloudFront",
    "n8n Automation",
    "BigQuery",
    "Cloudflare",
    "Terraform",
    "ArgoCD",
    "Git",
    "Linux",
];

const mobileLabels = [
    "Flutter",
    "Dart",
    "BLoC",
    "Firebase",
    "Sentry",
    "Braze SDK",
    "FWF (Feature Flags)",
    "HLS Streaming",
    "Maestro Testing",
    "Android Studio",
    "SQLite",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Web & Platform Engineering</h3>
                        <p>I build scalable web platforms and CMS tools using React and TypeScript. From Server-Driven UI systems on Strapi to microfrontend plugins with React Query — I deliver tools that empower marketing and product teams to operate without engineering bottlenecks.</p>
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
                        <h3>Mobile Engineering</h3>
                        <p>
                            I build and ship Flutter mobile features at scale — from splash screens and authentication flows to component isolation and offline experiences. I drive observability with Sentry telemetry and SLI dashboards, ensuring reliability for millions of users.
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
                        <h3>DevOps & Observability</h3>
                        <p>I design CI/CD pipelines, define SLI/SLO metrics, and build automation workflows that connect tools like Airtable, CMS, and Slack via n8n. From incident response to proactive monitoring with New Relic and BigQuery — I keep systems reliable.</p>
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