import React from 'react';
import tmbd from '../../../../src/asstes/TMDB_Logo.svg';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <hr className="h-line mt-10" />
      <div className="footer__content-container mt-5 flex">
        <div className="footer__credits flex">
          <p className="footer__api-credit content-font ">Film data provided by</p>
          <img className="footer__tmdb " src={tmbd} alt="The Movie Database" />
        </div>
        <div className="footer__socials flex">
          <a href="https://github.com/Tony-Villa/cinecurate" target="_blank">
            <FontAwesomeIcon className="mr-2" icon={faGithub} size="3x" style={{ color: '#e41f7b' }} />
          </a>
          <a href="https://www.linkedin.com/in/tony-villa-dev/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="3x" style={{ color: '#e41f7b' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
