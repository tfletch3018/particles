import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import Animate2 from "../components/Animate2/particles";
import "../index.css";

function SampleTwo() {
    return (
        <div>

            <Container>
                <Animate2 />

                <Container fluid style={{ marginTop: 50 }}>
                    <Row>
                        <h1 className="homeTwo">Sample Two</h1>
                        <p id="home" className="text-center">Triangles <span id="symbols">&#9651;</span></p>
                    </Row>
                </Container>

                <Container fluid style={{ marginTop: 50 }}>
                    <Row>
                        <div className="center">
                            <Link to="/home">
                                <button id="homebtn">Go Back</button>
                            </Link>
                        </div>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default SampleTwo;