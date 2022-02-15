import React from 'react';
import Video from '../../assets/video/1.mp4';

const Header = () => {
  return (
    <header>
      <div className="hero">
        <div className="hero-info">
          <h1 id="hero-title">iRead</h1>
          <div className="hero-text">
            <p>A virtual space to access & store your digital books.</p>
          </div>
        </div>
        <div className="styles_container">
          <div className="videoContainer">
            <video autoPlay loop muted playsInline id="videoPlayer">
              <source src={Video} id="mp4Source" type="video/mp4" /> Your
              browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
