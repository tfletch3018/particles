import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import CarouselComponent from "../components/Carousel";
import "../index.css";

function SlideShow() {
    return (
        <div>
                <Container fluid style={{ marginTop: 20 }}>
                <Row>
                    <h1 className="photoCarouselTwo">Slide Show!</h1>
                    <p id="photoCarousel" className="text-center">Enjoy the show&#128151;</p>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 0 }}>
                <Row>
                    <div className="center">
                        <Link to="/photoCarousel">
                            <button id="photoCarouselbtn">Go Back</button>
                        </Link>
                    </div>
                </Row>
            </Container>

            <Container>
                <CarouselComponent />
            </Container>

            {/* <Container fluid style={{ marginTop: 20 }}>
                <Row>
                    <div className="center">
                        <Link to="/photoCarousel">
                            <button id="photoCarouselbtn">Go Back</button>
                        </Link>
                    </div>
                </Row>
            </Container> */}
        </div>
    )
}

export default SlideShow;