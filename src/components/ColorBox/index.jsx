import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {
    
};
function getRandomColor(){
    const COLOR_LIST = ['green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 4);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'skyblue';
        return initColor;
    });
    function handleBoxClick(){
        //get random color
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color',newColor)
    }

    return (
        <div className = "color-box" style = {{backgroundColor: color}} onClick = {handleBoxClick}>
            COLOR BOX
        </div>
    );
}

export default ColorBox;