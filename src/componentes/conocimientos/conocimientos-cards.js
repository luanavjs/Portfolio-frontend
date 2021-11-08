import React from 'react';
import './conocimientos-cards.css'

const SkillsCards = ({skill}) =>{
    return (
        <div className="skills-cards">
            <div className="skills-icon">{skill.icono}</div>
            <label className="skills-tecnologia">{skill.nombre}</label>
        </div>
    )
}

export default SkillsCards;