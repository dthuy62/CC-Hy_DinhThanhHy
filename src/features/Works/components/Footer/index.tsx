import React from 'react';
import {images} from "../../../../constants/images";
import {Link} from "react-router-dom";
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/">
                <img src={images.LOGO_FOOTER} alt="loocreative logo" />
            </Link>
            <a href="https://vimeo.com/loocreative" target=" _blank">
                <p>VIMEO</p>
            </a>
            <a href="https://www.instagram.com/loocreative" target=" _blank">
                <p>YOUTUBE</p>
            </a>
            <a href="https://www.instagram.com/loocreative" target=" _blank">
                <p>INSTAGRAM</p>
            </a>
            <a
                href="https://www.facebook.com/loocreativeinc-110670107091286/"
                target=" _blank"
            >
                <p>FACEBOOK</p>
            </a>
        </div>
    );
};

export default Footer;