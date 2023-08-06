import React from "react";
import { social } from "../../social";
import Container from "../../components/Container";
import "./style.css";

function Footer() {
  return (
    <footer className="footer fixed-bottom">

      <Container>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="fabs inline-block">
            {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}
            {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
            {social.facebook && <a title="Visit Facebook profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
            {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
            {social.tiktok && <a title="Visit Tiktok" rel="noopener noreferrer" target="_blank" href={social.tiktok}><i className="fab fa-tiktok"></i></a>}
            {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}<br />
          </div>
        </div>
      </Container>

    </footer>
  );
}

export default Footer;
