import React from "react";
import './proyectos.css';
import {ProyectosData} from '../data/proyectos-data';
import ProyectosCards from './proyectos-cards';
import Separador from '../comun/separador/separador';


const Proyectos = () => {
    const data = ProyectosData;
    return(
        <div className="proyectos" id="proyectos" >
            <Separador/>
            <h2>Proyectos</h2>
            <div>
                {data.map((proyecto,indice)=>{
                    return <ProyectosCards proyecto={proyecto} key={indice}/>;
                })}
            </div>
        </div>
    );
}

export default Proyectos;