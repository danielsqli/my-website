import ProjectCard from './ProjectCard';

import { flowerDesc, reindenterDesc } from './ProjectDescriptions';

interface ProjProps {
    setInd: (ind: number ) => void;
};

const Projects = (props: ProjProps) => {
    return (
        <div className="d-flex flex-row">
            <ProjectCard 
                id={1}
                setProjInd={props.setInd}
                title="FlowerID" 
                description={flowerDesc} 
                linkName={["Github", "Play Store"]} 
                links={["https://github.com/danielsqli/FlowerID-App", "https://play.google.com/store/apps/details?id=com.flowerid"]}
                image="flower.png"
            />
            <ProjectCard
                id={2}
                setProjInd={props.setInd}
                title="Re-Indenter"
                description={reindenterDesc}
                linkName={["Github", "Web App"]}
                links={["https://github.com/danielsqli/reindenter", "https://reindenter.vercel.app"]}
                image="reindenter.png"
            />
        </div>
    )
}

export default Projects;
