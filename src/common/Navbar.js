import React from 'react';
import {Link} from 'react-router-dom';
import "../Css/Navbar.css";
function Navbar(){
    return(
        <div className="Navbar">
            <div className="Navbar__logo">

            </div>
            <div className="Navbar__menu">
                <ul className="Menu">
                    <Link to ="/">
                        <li className="Menu__btn">Home</li>
                    </Link>
                    <Link to ="/Docs">
                        <li className="Menu__btn">Docs</li>
                    </Link>
                    <Link to ="/Contact">
                        <li className="Menu__btn">Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;