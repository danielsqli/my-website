import Jumbotron from 'react-bootstrap/Jumbotron'
import Navigation from '../../components/Navigation'
import { text1, text2, text3, text4, githubs } from '../../components/aboutfid'

const FlowerID = () => {
    return (
        <div>
            <Navigation />
            <Jumbotron style={{ backgroundColor: "#384149"}}>
                <h1 className="mb-3">About FlowerID</h1>
                <div>
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                    <p>{text4}</p>
                    <p>{githubs}</p>
                </div>
            </Jumbotron>
        </div>
    )
}

export default FlowerID;