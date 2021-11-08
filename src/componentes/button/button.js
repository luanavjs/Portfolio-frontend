import React from 'react';
import './button.css';

const CustomButton = ({texto,link}) => {
    return (
        <button className="customButton" href={link}>{texto}</button>
    )
} 

export default CustomButton;