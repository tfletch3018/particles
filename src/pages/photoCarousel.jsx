import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import "../index.css";

function PhotoCarousel() {
    return (
        <div>
                <Container fluid style={{ marginTop: 100 }}>
                <Row>
                    <h1 className="photoCarousel">photoCarousel</h1>
                    <p id="photoCarousel" className="text-center">Slide Show Creations</p>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 100 }}>
                <Row>
                    <div className="center">
                        <Link to="/photoCarousel/slideShow">
                            <button id="photoCarouselbtn">Play Slide Show</button>
                        </Link>
                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default PhotoCarousel;