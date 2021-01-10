import { useState } from 'react';

import Projects from '../../components/Projects';
import Navigation from '../../components/Navigation';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { flowerDetail, reindenterDetail } from '../../components/ProjectDescriptions';
import styles from '../../styles/projects.module.css';

const ProjectHome = () => {
    const [projInd, setProjInd] = useState(0);
    const projectNames = ["These are my notable projects", "FlowerID", "Re-Indenter"];
    const projectDesc = ["Click on their names to learn more", flowerDetail, reindenterDetail];
    return (
        <div>
            <Navigation />
            <div className="row">
                <Jumbotron className={styles.aboutMain + " pt-4 col-7"}>
                    <h1>Projects</h1>
                    <hr/>
                    <Projects setInd={setProjInd}/>
                </Jumbotron>
                <Jumbotron className={styles.aboutDetail + " col-5"} fluid>
                    <h2>
                        {projectNames[projInd]}
                    </h2>
                    <hr />
                    <p>
                        {projectDesc[projInd]}
                    </p>
                </Jumbotron>
            </div>
        </div>
    );
}

export default ProjectHome;
