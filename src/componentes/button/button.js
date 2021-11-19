import React from 'react';
import './button.css';

const CustomButton = ({texto,link}) => {
    return (
        <button className="customButton"><a href={link}>{texto}</a></button>
    )
} 

export default CustomButton;