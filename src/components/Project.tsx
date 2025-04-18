import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import TalabatWebsite from './projects/TalabatWebsite';
import TalabatMobile from './projects/TalabatMobile';
import Vodafone from './projects/Vodafone';
import { ProjectData } from '../types/project';
import talabatWebsite from '../assets/images/projects/talabat-website/1.website.png';
import vodafoneWebsite from '../assets/images/projects/vodafone/vodafoneWebsite.png';
import '../assets/styles/Project.scss';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';

function Project() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const mode = document.querySelector('.light-mode') ? 'light' : 'dark';

    const projects: ProjectData[] = [
        {
            id: 1,
            title: "Talabat website",
            description: "Talabat is a leading online food ordering and delivery platform in the Middle East.",
            image: talabatWebsite,
            link: "https://www.talabat.com/",
            component: TalabatWebsite
        },
        {
            id: 2,
            title: "Talabat Mobile",
            description: "Talabat mobile applications for iOS and Android.",
            image: talabatWebsite,
            link: "https://www.talabat.com/",
            hasAndroid: true,
            hasIOS: true,
            component: TalabatMobile
        },
        {
            id: 3,
            title: "Vodafone Germany",
            description: "Vodafone telecommunications website.",
            image: vodafoneWebsite,
            link: "https://vodafone.de",
            component: Vodafone
        }
    ];

    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project"
                        onClick={() => setSelectedProject(project)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={project.image} className="zoom" alt={project.title} width="100%" />
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {project.title}
                            {project.hasAndroid && (
                                <FontAwesomeIcon icon={faAndroid} size="xs" />
                            )}
                            {project.hasIOS && (
                                <FontAwesomeIcon icon={faApple} size="xs" />
                            )}
                        </h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>

            <ProjectDetails
                open={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
                mode={mode}
            />
        </div>
    );
}

export default Project;