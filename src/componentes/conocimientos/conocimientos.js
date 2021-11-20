import React,{useEffect} from "react";
import './skills.css';
import Separador from '../comun/separador/separador';
import {SkillsData} from '../data/skills';
import SkillsCards from './conocimientos-cards';
import aos from 'aos';


const Conocimientos = () => {
    const data = SkillsData;
    useEffect(()=>{
        aos.init();
    },[])

    return(
        <div className="skills" id="skills">
            <Separador className="separador"/>
                <h2 className="skills-titulo">Conocimientos</h2>
                <div className="skills-container" >
                    {data.map((item)=>{ return(
                        <div className="skills-section" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <label className="skills-section-titulo">{item.type}</label>
                        <div className="skills-lista">
                            {item.list.map((skill)=>{
                                return( 
                                    <SkillsCards skill={skill}/>)
                                
                            })}
                        </div>
                    </div>
                    )
                        
                    })}
                </div>
            
            
        </div>
    );
}

export default Conocimientos;