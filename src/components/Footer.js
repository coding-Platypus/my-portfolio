import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaWhatsapp,
} from 'react-icons/fa';
import './Footer.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Arjunpur, North 24 Parganas</p>
              <p>West Bengal: 700059</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaWhatsapp
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              +91-6290394281
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              manashi.roy@icloud.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>
            This is Manashi Roy. Passionate about Computer Science, innovation
            and technology. Willing to work as a key player and gather
            experience and knowledge that will add to my personal development as
            well as professional development.
          </p>
          <div className="social">
            <NavLink to="https://www.facebook.com/manashi.roy.716">
              <FaFacebook
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </NavLink>
            <NavLink to="https://www.instagram.com/stree.dev/?igshid=Mzc1MmZhNjY%3D">
              <FaInstagram
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/manashi-roy-dev23/">
              <FaLinkedin
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </NavLink>
            <NavLink to="https://github.com/coding-Platypus">
              <FaGithub
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
