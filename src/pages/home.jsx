import Container from "../components/Container";
import Row from "../components/Row";
import Animate from "../components/Animate/particles";
import { Link } from "react-router-dom";
import "../index.css";

function Home() {
    return (
        <div>
            <Container>

                <Animate />

                <Container fluid style={{ marginTop: 50 }}>
                    <Row>
                        <h1 className="home">particles</h1>
                    </Row>
                </Container>

                <Container fluid style={{ marginTop: 50 }}>
                    <Row>
                        <div className="center">
                            <Link to="/home/sampleOne">
                                <button id="homebtn">Sample One</button>
                            </Link>
                            <Link to="/home/sampleTwo">
                                <button id="homebtn">Sample Two</button>
                            </Link>
                        </div>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <p id="home" className="text-center">Animation Creations</p>
                    </Row>
                </Container>

            </Container>
        </div>
    )
}

export default Home;