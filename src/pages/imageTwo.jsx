import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import "../index.css";

function ImageTwo() {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="artWork">Image Two</h1>
                    <p id="artWork" class="text-center">Photo Element Innovation?</p>
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

export default ImageTwo;