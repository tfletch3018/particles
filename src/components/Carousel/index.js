import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import Container from '../Container';
import photo1 from "./Photos/photo1.jpg";
import photo2 from "./Photos/photo2.jpg";
import photo3 from "./Photos/photo3.jpg";
import photo4 from "./Photos/photo4.jpg";
import photo5 from "./Photos/photo5.jpg";
import photo6 from "./Photos/photo6.jpg";
import photo7 from "./Photos/photo7.jpg";
import photo8 from "./Photos/photo8.jpg";
import photo9 from "./Photos/photo9.jpg";
import "./style.css"



function CarouselComponent() {
    return (

        // <Container>
            <div className="carousel-wrapper">
                <Carousel className="style" infiniteLoop useKeyboardArrows autoPlay>

                    <div className="slides">
                           <img src={photo1} id="" alt="" />
                        <div className="carousel-caption">
                            <h3>description</h3>
                            <p>doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        <img src={photo2} id="" alt="" />
                        <div className="carousel-caption">
                        <h3>description</h3>
                            <p>doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides" id="">
                        <img src={photo3} id="" alt="" />
                        <div className="carousel-caption">
                        <h3>description</h3>
                            <p>doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        <img src={photo4} alt="" />
                        <div className="carousel-caption">
                        <h3>description</h3>
                            <p>doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        <img src={photo5} id="" alt="" />
                        <div className="carousel-caption">
                        <h3>description</h3>
                            <p>doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        <img src={photo6} id="" alt="" />
                        <div className="carousel-caption">
                        <h3>description</h3>
                            <p>doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        <img src={photo7} id="" alt="" />
                        <div className="carousel-caption">
                        <h3>description</h3>
                            <p>doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        <img src={photo8} id="" alt="" />
                        <div className="carousel-caption">
                        <h3>description</h3>
                            <p>doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        <img src={photo9} id="" alt="" />
                        <div className="carousel-caption">
                        <h3>description</h3>
                            <p>doing something dope&#128512;</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        // </Container>
    );
}

export default CarouselComponent