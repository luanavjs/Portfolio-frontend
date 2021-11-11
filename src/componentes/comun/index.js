import React from 'react';
import './ccc.css';
import {Redes} from '../data/redes'

const ContactoIcons = () => {
    const data = Redes;
    return (<div className="redes">
        {data.map((item)=>{
            return(
                <a href={item.link}>
                    <div className="redes-icon-div">
                        <img src={item.icon} className="redes-icon" alt="imagen de red social"></img>
                    </div>
                </a>
            )
        })}
    </div>)
}

export default ContactoIcons;