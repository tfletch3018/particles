import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css"
import { captions } from "./captions.js"
import photo1 from "./Photos/photo1.jpg"
import photo2 from "./Photos/photo2.jpg";
import photo3 from "./Photos/photo3.jpg";
import photo4 from "./Photos/photo4.jpg";
import photo5 from "./Photos/photo5.jpg";
import photo6 from "./Photos/photo6.jpg";
import photo7 from "./Photos/photo7.jpg";
import photo8 from "./Photos/photo8.jpg";
import photo9 from "./Photos/photo9.jpg";
import "./style.css"

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
            plugins={[Captions]}
                open={open}
                close={() => setOpen(false)}
                slides={
                    [
                        { src: [photo1], title: [captions.one], },
                        { src: [photo2], title: [captions.two], },
                        { src: [photo3], title: [captions.three], },
                        { src: [photo4], title: [captions.four], },
                        { src: [photo5], title: [captions.five], },
                        { src: [photo6], title: [captions.six], },
                        { src: [photo7], title: [captions.seven], },
                        { src: [photo8], title: [captions.eight], },
                        { src: [photo9], title: [captions.nine], },
                    ]
                }
            />
        </>
    );
}

export default Carousel1;