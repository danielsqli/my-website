import Navigation from './Navigation'
import Projects from './Projects'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default function Home() {
  return (
    <div>
      <Navigation />
      <Jumbotron>
          <h1>Hello</h1>
          <p>
            My Name is Daniel Li, a undergraduate Computer Science student at the Univeristy of Waterloo
          </p>
      </Jumbotron>
      <Container fluid>
        <h1>Projects</h1>
        <hr className="h-50"/>
        <Projects />
      </Container>
    </div>
  );
}
