import React from 'react';
import './button.css';

const customButton = ({texto}) => {
    return (
        <button className="customButton">{texto}</button>
    )
} 

export default customButton;