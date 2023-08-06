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
            {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
            {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
            {social.tiktok && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.tiktok}><i className="fab fa-tiktok"></i></a>}
            {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}<br />
          </div>
        </div>
      </Container>
      {/* <div className="container">

        <span>
          
          <ul className="nav">
          <li className="nav-item">
              <a title="Visit TikTok profile"
                className="nav-link active"
                href={social.linkedin}>
                <i className="fab fa-linkedin" 
                ></i></a>
            </li>
            <li className="nav-item">
              <a title="Visit TikTok profile"
                className="nav-link active"
                href={social.facebook}>
                <i className="fab fa-facebook-square" 
                ></i></a>
            </li>
            <li className="nav-item">
              <a title="Visit TikTok profile"
                className="nav-link active"
                href={social.instagram}>
                <i className="fab fa-instagram" 
                ></i></a>
            </li>
            <li className="nav-item">
              <a title="Visit Instagram profile"
                className="nav-link active"
                href={social.tiktok}>
                <i className="fab fa-tiktok" 
                ></i></a>
            </li>
            <li className="nav-item">
              <a title="View Resume"
                className="nav-link active"
                href={social.resume}>
                <i className="fab fa-resume" 
                ></i></a>
            </li>
          </ul>
        </span>
      </div> */}

    </footer>
  );
}

export default Footer;
