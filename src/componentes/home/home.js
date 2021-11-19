import React, {useState, useEffect} from 'react';
import './home.css';
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';
import lulu from '../media/img-lulu.svg'
import CustomButton from '../button/button'
import Conocimientos from '../conocimientos/conocimientos'
import Proyectos from '../proyectos/proyectos'
import Contacto from '../contacto/contacto'

const Home = () => {
    const [informacion, setInformacion] = useState({});
    useEffect(()=>{
        axios.get('https://portfolio-backend-lulu.herokuapp.com/profile')
        .then(
            res => setInformacion(res.data[0])
        )
    },[setInformacion])
    
    return(
        <div className="home">
            <Container className="homee" >
                <Row>
                    <Col sm={4}>
                        <div>
                            <img src={lulu} alt="imagen de lulu" className="img_lulu"></img>
                        </div> 
                    </Col>
                    <Col sm={8} className="intro">
                    <h2>¡Hola! Soy</h2>
                    <h1 className="titulo">{informacion.nombre} {informacion.apellido}</h1>
                        <p className="descripcion">{informacion.descripcion}</p>
                        <div className="botones">
                            <CustomButton texto="Contacto" link="#contacto"/>
                            <CustomButton texto="Descargar CV" link="https://drive.google.com/file/d/19Oh8kFm2rWdtmCp8KWS0coCVcR1OyCEX/view?usp=sharing"/>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
            <Conocimientos/>
            <Proyectos/>
            <Contacto/>
        </div>
    );
}

export default Home;