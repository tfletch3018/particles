import Container from "../components/Container";
import Row from "../components/Row";
import "../index.css";

function SampleOne() {
    return (
        <div>
            <Container>

                <Row>

                    <h1 className="home">Sample One</h1>
                    <p id="home" class="text-center">This is a new route successfully connected to the particles main page using a button</p>
                </Row>



            </Container>


        </div>
    )
}

export default SampleOne;