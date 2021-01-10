import { useState } from 'react';

import Projects from '../../components/Projects';
import Navigation from '../../components/Navigation';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Image from 'next/image';

import { flowerDetail, flowerExDesc, reindenterDetail, reindenterExDesc } from '../../components/ProjectDescriptions';
import styles from '../../styles/projects.module.css';

interface ImageProps {
    width: number;
    height: number;
}

const ProjectHome = () => {
    const [projInd, setProjInd] = useState(0);
    const projectNames = ["These are my notable projects", "FlowerID", "Re-Indenter"];
    const projectDesc = ["Click on their names to learn more", flowerDetail, reindenterDetail];
    const projectExDesc = ["", flowerExDesc, reindenterExDesc];
    const projectEx = ["", "/flowerid.png", "/indentedcode.png"];
    const exProps: ImageProps[] = [{width: 0, height: 0}, {width: 864, height: 958}, {width: 1143, height: 748}];
    return (
        <div className={styles.projMain}>
            <Navigation />
            <div className={styles.projContent + " row"}>
                <Jumbotron className={styles.aboutMain + " col-7"}>
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
                    <p>
                        {projectExDesc[projInd]}
                    </p>
                    {projInd !== 0 ?
                        <Image src={projectEx[projInd]} width={exProps[projInd].width * 0.6} height={exProps[projInd].height * 0.6} /> : null
                    }
                </Jumbotron>
            </div>
        </div>
    );
}

export default ProjectHome;
