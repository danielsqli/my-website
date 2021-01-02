import Navigation from '../Navigation'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Projects = () => {
    return (
        <div>
            <Navigation />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="flower.png" />
                <Card.Body>
                    <Card.Title>FlowerID</Card.Title>
                    <Card.Text>
                    Mobile app that identifies what species of flower your image is. Currently supports
                    Daisy, Dandelion, Rose, Tulip, Sunflower
                    </Card.Text>
                    <Button variant="primary">
                        Github
                        <a href="https://github.com/tonylizj/FlowerID-App" target="_blank"/>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Projects;
