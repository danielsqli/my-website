import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
    return (
        <Navbar expand="lg" variant="dark">
            <Navbar.Brand href="/">Daniel Li</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://github.com/danielsqli" target="_blank">Github</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/daniel-li-8ba675161" target="_blank">Linkedin</Nav.Link>
                    <Nav.Link href="/Resume.pdf" target="_blank">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
