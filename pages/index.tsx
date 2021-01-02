import Navigation from './Navigation'
import Projects from './Projects'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Home() {
  return (
    <div style={ {} }>
      <Navigation />
      <Jumbotron style={ {backgroundColor: "#384149"} } className="mb-0">
          <h1>Hello</h1>
          <p>
            My Name is Daniel Li, a undergraduate Computer Science student at the Univeristy of Waterloo
          </p>
      </Jumbotron>
      <Jumbotron style={ {backgroundColor: "#232627"} }>
        <h1>Projects</h1>
        <hr/>
        <Projects />
      </Jumbotron>
    </div>
  );
}
