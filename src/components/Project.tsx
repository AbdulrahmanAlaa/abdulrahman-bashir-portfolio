import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import talabatWebsite from '../assets/images/projects/talabat-website/1.website.png';
import vodafone from '../assets/images/projects/vodafone/vodafone.png';

import '../assets/styles/Project.scss';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';

interface ProjectData {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    hasAndroid?: boolean;
    hasIOS?: boolean;
}

function Project() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    // Get mode from closest parent with light/dark mode class
    const mode = document.querySelector('.light-mode') ? 'light' : 'dark';

    const projects: ProjectData[] = [
        {
            id: 1,
            title: "Talabat website",
            description: "Talabat is a leading online food ordering and delivery platform in the Middle East. I worked on the front-end development of the Talabat website, focusing on enhancing user experience and optimizing performance.",
            image: talabatWebsite,
            link: "https://www.talabat.com/"
        },
        {
            id: 2,
            title: "Talabat Mobile",
            description: "Talabat is a leading online food ordering and delivery platform in the Middle East. I contributed to the development of the Talabat mobile app, focusing on enhancing user experience and optimizing performance.",
            image: vodafone,
            link: "https://www.talabat.com/",
            hasAndroid: true,
            hasIOS: true
        },
        {
            id: 3,
            title: "Vodafone Germany",
            description: "Vodafone is a global telecommunications company. I contributed to the development of their website, focusing on improving user engagement and accessibility.",
            image: vodafone,
            link: "https://vodafone.de"
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