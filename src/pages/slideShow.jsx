import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import "../index.css";

function SlideShow() {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="photoCarousel">Slide Show!</h1>
                    <p id="photoCarousel" class="text-center">A slideshow will play upon user request</p>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 200 }}>
                <Row>
                    <div className="center">
                        <Link to="/photoCarousel">
                            <button id="photoCarouselbtn">Go Back</button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default SlideShow;