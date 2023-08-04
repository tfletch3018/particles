import Container from "../components/Container";
import Row from "../components/Row";
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


        </div>
    )
}

export default SlideShow;