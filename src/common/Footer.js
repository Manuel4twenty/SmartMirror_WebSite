import React from 'react';
import {Link} from 'react-router-dom';

import '../Css/Footer.css';
function Footer(){
    return(
        <footer className="Footer">
            <div className="Footer__links">
                <h1>Site Link</h1>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/Docs">
                    <li>Documentation</li>
                </Link>
                <Link to="Contact">
                    <li>Contact Me</li>
                </Link>
            </div>
            <div className="Footer__contact">
                <h1>Contact Me</h1>
                <li>manuel.marongiu.s@iisenzoferrari.it</li>
                <li>manuel4twenty@gmail.com</li>

            </div>
        </footer>
    );
}

export default Footer;