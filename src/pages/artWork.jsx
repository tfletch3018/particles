import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import "../index.css";

function ArtWork() {
    return (
        <div>
                <Container fluid style={{ marginTop: 100 }}>
                <Row>
                    <h1 className="artWork">artWork</h1>
                    <p id="artWork" className="text-center">Texture, pattern & color creations</p>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 100 }}>
                <Row>
                    <div className="center">
                        <Link to="/artWork/imageOne">
                            <button id="artWorkbtn">Image One</button>
                        </Link>

                        <Link to="/artWork/imageTwo">
                            <button id="artWorkbtn">Image Two</button>
                        </Link>
                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default ArtWork;