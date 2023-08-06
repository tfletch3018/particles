import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import Animate1 from "../components/Animate1/particles";
import "../index.css";

function SampleOne() {
    return (
        <div>
            <Container>

                <Animate1 />

                <Container fluid style={{ marginTop: 50 }}>
                <Row>
                    <h1 className="homeTwo">Sample One</h1>
                    <p id="home" className="text-center"><span id="symbols">&#9633;&#9633;&#9633;</span> Squares <span id="symbols">&#9633;&#9633;&#9633;</span></p>
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

export default SampleOne;