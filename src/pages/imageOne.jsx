import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import "../index.css";

function ImageOne() {
    return (
        <div className="background1">
            <Container>
                <Row>
                    <p id="artWork" className="text-center"></p>
                </Row>
            </Container>

            <Container>
                <Row>
                    <div className="center">
                        <Link to="/artWork">
                            <button id="artWorkbtn">Go Back</button>
                        </Link>
                    </div>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 50 }}>
                <Row>
                    <h1 className="artWorkTwo">Image One</h1>
                </Row>
            </Container>

        </div>
    )
}

export default ImageOne;