import { useState } from 'react';

import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { flowerDesc, flowerDetail, reindenterDesc, reindenterDetail } from './ProjectDescriptions';
const Projects = () => {
    const [showAlert, setShowAlert] = useState("");
    return (
        <div>
            <div className="row">
                <ProjectCard 
                    title="FlowerID" 
                    description={flowerDesc} 
                    linkName={["Github", "Play Store"]} 
                    links={["https://github.com/danielsqli/FlowerID-App", "https://play.google.com/store/apps/details?id=com.flowerid"]}
                    image="flower.png"
                    showString="flower"
                    showDesc={setShowAlert}
                />
                <ProjectCard
                    title="Re-Indenter"
                    description={reindenterDesc}
                    linkName={["Github", "Web App"]}
                    links={["https://github.com/danielsqli/reindenter", "https://reindenter.vercel.app"]}
                    image="reindenter.png"
                    showString="indent"
                    showDesc={setShowAlert}
                />
            </div>
            <ProjectModal 
                show={showAlert} 
                setShow={setShowAlert} 
                showString="flower"
                name="FlowerID"
                description={flowerDetail}
            />
            <ProjectModal
                show={showAlert} 
                setShow={setShowAlert} 
                showString="indent"
                name="Re-Indenter"
                description={reindenterDetail}
            />
        </div>

    )
}

export default Projects;
