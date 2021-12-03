import React from 'react';
import tmbd from '../../../../src/asstes/TMDB_Logo.svg';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
          <FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: '#e41f7b' }} />
          <FontAwesomeIcon icon={faTwitter} size="3x" style={{ color: '#e41f7b' }} />
          <FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: '#e41f7b' }} />
          <FontAwesomeIcon icon={faTwitch} size="3x" style={{ color: '#e41f7b' }} />
          <FontAwesomeIcon icon={faFacebook} size="3x" style={{ color: '#e41f7b' }} />
          <FontAwesomeIcon icon={faYoutube} size="3x" style={{ color: '#e41f7b' }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
