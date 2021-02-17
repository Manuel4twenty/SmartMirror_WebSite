import React from 'react';

/** Style **/
import '../Css/Home.css';


/** Component **/
import CardLink from '../common/CardLink.js';
/** Media **/
import HeaderIMG from '../media/img/mirror.jpg';
import GitIcon from '../media/img/GitIcon.png';
import DocsIcon from '../media/img/DocsIcon.png';
import ContacIcon from '../media/img/ContactIcon.png';
import MirrorVideo from '../media/video/try.mp4';
function Home(){

    const GitText="Magic Mirror 1.0 is a free open source projects that allow you to turn your simple boring Mirror in a better Mirror! View The source code on GitHub"
    const DocsText="Read my Docs and know more about Magic Mirror 1.0 and how to install on your own Mirror";
    const ContactText="Complete a simple form and write me for any questions";
    return(
        <div className="Home">
            <div className="Header">
                <img src={HeaderIMG} className="Header__image"></img>
                <h1 className="Header__Caption">Smart Mirror 1.0</h1>
            </div>
            <div className="Links">
                <div className="Links__link" id="GitHub"><CardLink source={GitIcon} text={GitText} url="#" link="View on GitHub"/></div>
                <div className="Links__link" id="Documentation"><CardLink source={DocsIcon} text={DocsText} url="#" link="Read the Docs" /></div>
                <div className="Links__link" id="Contact"><CardLink source={ContacIcon} text={ContactText} url="#" link="Contact Me"/></div>
            </div>
            <div className="Video__container">
                <div className="Video__player">
                    <video width={"100%"} height={"500px"} controls>
                        <source src={MirrorVideo} type="video/mp4"></source>
                    </video>
                </div>
            </div>
        </div>
        
    );
}
export default Home;