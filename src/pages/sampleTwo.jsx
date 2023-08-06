import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import "../index.css";

function SampleTwo() {
    return (
        <div>
                <Container fluid style={{ marginTop: 100 }}>
                <Row>
                    <h1 className="homeTwo">Sample Two</h1>
                    <p id="home" className="text-center">Now we are getting somewhere, what will we put here?</p>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 200 }}>
                    <Row>
                        <div className="center">
                            <Link to="/home">
                                <button id="homebtn">Go Back</button>
                            </Link>
                        </div>
                    </Row>
                </Container>
        </div>
    )
}

export default SampleTwo;