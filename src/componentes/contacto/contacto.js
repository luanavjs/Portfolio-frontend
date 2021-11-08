import React from 'react';
import './contacto.css';
import ContactoIcons from '../comun/index';
import Separador from '../comun/separador/separador';



const Contacto = () => {
        return(         
                <div className="contacto" id="contacto">
                        <Separador/>
                        <h2>Contacto</h2>
                        <p>Estas son algunas de mis redes sociales donde podes encontrarme:</p>
                        <ContactoIcons/>
                        <span>Email: luanalorenavallejos@gmail.com</span>
                </div>
        
        )}

export default Contacto;