import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import Carousel1 from "../components/Carousel1";
import "../index.css";

function SlideShowOne() {
    return (
        <div>

<Container fluid style={{ marginTop: 20 }}>
                <Row>
                    <div className="center">
                        <Link to="/photoCarousel">
                            <button id="photoCarouselbtn">Go Back</button>
                        </Link>
                    </div>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 20 }}>
                <Row>
                    <h1 className="photoCarouselTwo">Another Slide Show!</h1>
                </Row>
            </Container>

        

            <Container>
                <Carousel1 />
            </Container>

            <Container>
                <Row>
                    <p id="photoCarousel" className="text-center">&#128151;Enjoy!&#128151;</p>
                </Row>
            </Container>

        </div>
    )
}

export default SlideShowOne;