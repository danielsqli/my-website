import Jumbotron from 'react-bootstrap/Jumbotron'
import Navigation from '../../components/Navigation'
import text from '../../components/aboutfid'

const FlowerID = () => {
    return (
        <div>
            <Navigation />
            <Jumbotron style={ {backgroundColor: "#384149"} }>
                <h1>About FlowerID</h1>
                {text}
            </Jumbotron>
        </div>
    )
}

export default FlowerID;