import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import "../index.css";

function ImageOne() {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="artWork">Image One</h1>
                    <p id="artWork" class="text-center">Maybe we will just use this for original styling elements</p>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 200 }}>
                <Row>
                    <div className="center">
                        <Link to="/artWork">
                            <button id="artWorkbtn">Go Back</button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default ImageOne;