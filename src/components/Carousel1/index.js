import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import photo1 from "./Photos/photo1.jpg"
import photo2 from "./Photos/photo2.jpg";
import photo3 from "./Photos/photo3.jpg";
import photo4 from "./Photos/photo4.jpg";
import photo5 from "./Photos/photo5.jpg";
import photo6 from "./Photos/photo6.jpg";
import photo7 from "./Photos/photo7.jpg";
import photo8 from "./Photos/photo8.jpg";
import photo9 from "./Photos/photo9.jpg";
// import "./style.css"

function Carousel1() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
        <div className="justify-content center">
            <button id="photoCarouselbtn" type="button" onClick={() => setOpen(true)}>
                Start the Show
            </button>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={
                    [
                        { src: [photo1] },
                        { src: [photo2] },
                        { src: [photo3] },
                        { src: [photo4] },
                        { src: [photo5] },
                        { src: [photo6] },
                        { src: [photo7] },
                        { src: [photo8] },
                        { src: [photo9] },
                    ]
                }
            />
        </>
    );
}

export default Carousel1;