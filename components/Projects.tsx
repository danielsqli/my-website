import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import styles from '../styles/links.module.css';

const Projects = () => {
    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: "#181a1b" }} >
                <Card.Img variant="top" src="flower.png" />
                <Card.Body>
                    <Link href="projects/flowerid" passHref>
                        <Card.Title className={styles.about}>
                            FlowerID
                        </Card.Title>
                    </Link>
                    <Card.Text>
                        Mobile app that identifies what species of flower your image is. Currently supports
                        Daisy, Dandelion, Rose, Tulip, Sunflower
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/danielsqli/FlowerID-App" target="_blank" className="mr-2">
                        Github
                    </Button>
                    <Button variant="primary" href="https://play.google.com/store/apps/details?id=com.flowerid" target="_blank">
                        Play Store
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Projects;
