import React from "react";
import './about.css';
import mew from '../media/mew.gif'
import lulu from '../media/img-lulu.svg'

const AboutMe = () => {
    return(
        <div className="about">
            <div className="about-top">
                <div className="about_foto">
                    <img src={lulu} alt="imagen de lulu" className="picture"></img>
                </div>
                <div className="about-info">
                    ¡Hola! Soy
                    <br/> <span className="info-name"></span><br/>
                    Desarrolladora Fullstack JS, estudiante de Informática y fan de los gatitos 💖
                </div>
            </div>
                
            </div>
        
    );
}

export default AboutMe;