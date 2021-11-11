import React from 'react'
import './proyectos-cards.css'

const ProyectosCards = ({proyecto}) =>{ 
    return(
        <div className="proyectos-cards">
            <div className="proyectos-info">
                <label className="proyectos-titulo">{proyecto.titulo}</label>
                <div className="proyectos-links">
                    {proyecto.link &&  (<a className="proyecto-link" href={proyecto.link}>
                            <div className="proyecto-boton">
                                <i class="bi bi-globe2"></i> Link
                            </div>
                        </a>)}
                        {proyecto.github &&  (<a className="proyecto-link" href={proyecto.github}>
                            <div className="proyecto-boton">
                            <i class="bi bi-github"></i> Github
                            </div>
                        </a>)}
                </div>
                <p>{proyecto.descripcion}</p>
                <div className="proyecto-tags">
                    {proyecto.tags.map((etiqueta)=>{
                        return <label className="etiqueta">{etiqueta}</label>
                    })}
                </div>
            </div>
            <img src={proyecto.imagen} className="proyectos-img" alt="imagen de proyecto"></img>
        </div>
    )
    
}

export default ProyectosCards;