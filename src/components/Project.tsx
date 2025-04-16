import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import talabatWebsite from '../assets/images/projects/talabat-website/1.website.png';
import vodafone from '../assets/images/projects/vodafone/vodafone.png';

import '../assets/styles/Project.scss';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.talabat.com/" target="_blank" rel="noreferrer"><img src={talabatWebsite} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.talabat.com/" target="_blank" rel="noreferrer"><h2>Talabat website</h2></a>
                    <p>
                        Talabat is a leading online food ordering and delivery platform in the Middle East. I worked on the front-end development of the Talabat website, focusing on enhancing user experience and optimizing performance.
                    </p>
                </div>
                <div className="project">
                    <a href="https://www.talabat.com/" target="_blank" rel="noreferrer"><img src={vodafone} className="zoom" alt="thumbnail" width="100%" /></a>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        Talabat
                        <a href="https://play.google.com/store/apps/details?id=com.talabat&hl=en" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faAndroid} size="xs" />
                        </a>
                        <a href="https://apps.apple.com/us/app/talabat-food-grocery-more/id451001072" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faApple} size="xs" />
                        </a>
                    </h2>
                    <p>
                        Talabat is a leading online food ordering and delivery platform in the Middle East. I contributed to the development of the Talabat mobile app, focusing on enhancing user experience and optimizing performance.
                    </p>
                </div>
                <div className="project">
                    <a href="https://vodafone.de" target="_blank" rel="noreferrer"><img src={vodafone} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://vodafone.de" target="_blank" rel="noreferrer"><h2>
                        Vodafone Germany
                    </h2></a>
                    <p>
                        Vodafone is a global telecommunications company. I contributed to the development of their website, focusing on improving user engagement and accessibility.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;