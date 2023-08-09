import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import "../index.css";

function ImageTwo() {
    return (
        <div className="background2">

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
                    <h1 className="artWorkTwo">Image Two</h1>
                </Row>
            </Container>

        </div>
    )
}

export default ImageTwo;