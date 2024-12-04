import React from 'react';
import './BlockYouNeed.css';
function BlockYouNeed(props){
    return(
        <div className="mini-div">
        <img src={props.img}></img>
        <h3>{props.title} блок</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit{props.text}</p>    
        </div>
    );
}
export default BlockYouNeed;