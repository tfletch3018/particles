import Container from "../components/Container";
import Row from "../components/Row";
import Animate from "../components/Animate/particles";
import "../index.css";

function Home() {
    return (
        <div>
            <Container>
                <Animate />
                <Container>

                    <Row>

                        <h1 className="home">particles</h1>

                    </Row>


                </Container>
            </Container>


        </div>
    )
}

export default Home;