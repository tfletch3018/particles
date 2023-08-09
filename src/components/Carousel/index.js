import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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

        <div className="carousel-wrapper">
            <Carousel className="style" infiniteLoop useKeyboardArrows autoPlay>

                <div className="slides">
                    <img src={photo1} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@calebjamesfisher?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Caleb Fisher</a> on <a href="https://unsplash.com/photos/H6NvPEkyP0k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>

                <div className="slides">
                    <img src={photo2} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@bogomi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bogomil Mihaylov</a> on <a href="https://unsplash.com/photos/g7x8QV6rPx4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>

                <div className="slides" id="">
                    <img src={photo3} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@quinoal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Quino Al</a> on <a href="https://unsplash.com/photos/mBQIfKlvowM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>

                <div className="slides">
                    <img src={photo4} alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@valentinbalan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Valentin Balan</a> on <a href="https://unsplash.com/photos/1AKkdXwN87E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>

                <div className="slides">
                    <img src={photo5} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Clode</a> on <a href="https://unsplash.com/photos/IY9bfJAM2zM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>

                <div className="slides">
                    <img src={photo6} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@acuriousape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Liu</a> on <a href="https://unsplash.com/photos/1j-Lmvg_1W0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>

                <div className="slides">
                    <img src={photo7} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@tival?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Val Tievsky</a> on <a href="https://unsplash.com/photos/J4itE356ie0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>

                <div className="slides">
                    <img src={photo8} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@borisworkshop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Boris  Smokrovic</a> on <a href="https://unsplash.com/photos/DPXytK8Z59Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>

                <div className="slides">
                    <img src={photo9} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@marica_conlac?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marica Romeo</a> on <a href="https://unsplash.com/photos/mMpT-t6KNrE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>
            </Carousel>
        </div>
        // </Container>
    );
}

export default CarouselComponent;