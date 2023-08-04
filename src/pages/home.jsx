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

                <Container>
                    <Row>
                        <h1 className="home">particles</h1>
                        <p id="home" class="text-center">Animation Creations</p>
                    </Row>
                </Container>

                <Container fluid style={{ marginTop: 100 }}>
                    <Row>
                        <div className="center">

                            <Link to="/home/sampleOne">
                                <button id="homebtn">Sample One</button>
                            </Link>
                            <Link to="/home/sampleTwo">

                            <button id="homebtn" onclick="a href">Sample Two</button>
                            </Link>
                        </div>

                    </Row>

                </Container>
            </Container>


        </div>
    )
}

export default Home;