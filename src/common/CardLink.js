import React from 'react';


/** Style **/
import '../Css/CardLink.css';

/** Media**/

function CardLink(props){
    return(
        <div className="CardLink">
            <div className="Card">
                <div className="Icon">
                    <img src={props.source}></img>
                </div>
                <div className="Text">
                    <p>{props.text}</p>
                    <a href={props.url}></a>
                    <div className="url">
                        <a href={props.url}>{props.link}</a>
                    </div>
                </div>
                
            </div>
        </div>

    );
}

export default CardLink;