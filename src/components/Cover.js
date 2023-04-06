import { Link } from 'react-router-dom';
import './Cover.css';

import React from 'react';

const Cover = () => {
  return (
    <div className="cover">
      <div className="mask">
        <img
          className="intro-img"
          src="https://startupxplore.com/uploads/ff80808179f03a1a0179f1a5cb5e16ad-large.png"
          alt="intro-img"
        />
      </div>
      <div className="content">
        <p>HI, I'M MANASHI.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cover;
