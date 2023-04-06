import { Link } from 'react-router-dom';
import './AboutContent.css';
import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a front-end developer. I create responsive secure websites for my
          clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              src="https://maktabkhooneh.org/media/career/images/React-JS-front-end.jpg"
              className="img"
              alt="true"
            />
          </div>
          <div className="img-stack bottom">
            <img
              src="https://betanews.com/wp-content/uploads/2018/04/file-manager-windows-10.jpg"
              className="img"
              alt="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
