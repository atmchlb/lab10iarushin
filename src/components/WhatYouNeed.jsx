import React from 'react';
import BlockYouNeed from './BlockYouNeed';
import './WhatYouNeed.css';
function WhatYouNeed(props){
    return(
        <div className="div-WhatYouNeed">
            <h2>Что Вам необходимо?</h2>
            <div className='mini-div-Container'>
                <BlockYouNeed img = {props.firstImage} title = 'Первый' text = ''></BlockYouNeed>
                <BlockYouNeed img = {props.secondImage}  title = 'Второй' text = '?'></BlockYouNeed>
                <BlockYouNeed img = {props.thirdImage} title = 'Третий' text = '!'></BlockYouNeed>
            </div>
            
        </div>
    );
}
export default WhatYouNeed;