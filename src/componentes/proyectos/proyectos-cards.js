import React from 'react'
import './proyectos-cards.css'

const ProyectosCards = ({proyecto,key}) =>{ 
    /*useEffect(()=>{
        aos.init();
    },[])*/
    return(
        <div key={key} className="proyectos-cards">
            <div className="proyectos-info">
                <label className="proyectos-titulo">{proyecto.titulo}</label>
                <div className="proyecto-links">
                    {proyecto.link &&  (<a className="proyecto-link" href={proyecto.link}>
                            <div className="proyecto-boton">
                                <i className="bi bi-globe2"></i> Link
                            </div>
                        </a>)}
                        {proyecto.github &&  (<a className="proyecto-link" href={proyecto.github}>
                            <div className="proyecto-boton">
                            <i className="bi bi-github"></i> Github
                            </div>
                        </a>)}
                </div>
                <p>{proyecto.descripcion}</p>
                <div className="proyecto-tags">
                    {proyecto.tags.map((etiqueta, indice)=>{
                        return <label className="etiqueta" key={indice}>{etiqueta}</label>
                    })}
                </div>
            </div>
            <img src={proyecto.imagen} className="proyectos-img" alt="imagen de proyecto"></img>
        </div>
    )
    
}

export default ProyectosCards;