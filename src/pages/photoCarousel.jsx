import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import "../index.css";

function PhotoCarousel() {
    return (
        <div>
            <Container fluid style={{ marginTop: 50 }}>
                <Row>
                    <h1 className="photoCarousel">photoCarousel</h1>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 50 }}>
                <Row>
                    <div className="center">
                        <Link to="/photoCarousel/slideShow">
                            <button id="photoCarouselbtn">Play Slide Show</button>
                        </Link>
                        <Link to="/photoCarousel/slideShowOne">
                            <button id="photoCarouselbtn">Play Slide Show</button>
                        </Link>
                    </div>
                </Row>
            </Container>

            <Container>
                <Row>
                    <p id="photoCarousel" className="text-center">Slide Show Creations</p>

                </Row>
            </Container>

        </div>
    )
}

export default PhotoCarousel;