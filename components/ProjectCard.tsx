import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import styles from '../styles/projects.module.css';

interface ProjProps {
    id: number;
    setProjInd: (ind: number) => void;
    title: string;
    description: string;
    linkName: string[];
    links: string[];
    image: string;
}

const ProjectCard = (props: ProjProps) => {
    return (
        <Card style={{ width: '18rem', backgroundColor: "#181a1b", marginRight: "1rem" }} >
            <Card.Img variant="top" src={props.image} className={styles.aboutImg}/>
            <Card.Body className={styles.aboutBody}>
                <Card.Title className={styles.about} onClick={() => props.setProjInd(props.id)}>
                   {props.title}
                </Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <div className={styles.aboutLinks}>
                    {props.linkName.map((link, ind) => 
                        <Button variant="primary" href={props.links[ind]} key={ind} target="_blank" className="mr-2">
                            {link}
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
