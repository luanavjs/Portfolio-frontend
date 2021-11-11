import React from 'react';
import './home.css';
import {Container,Row,Col} from 'react-bootstrap';
import lulu from '../media/img-lulu.svg'
import CustomButton from '../button/button'
import Conocimientos from '../conocimientos/conocimientos'
import Proyectos from '../proyectos/proyectos'
import Contacto from '../contacto/contacto'

const Home = () => {
    return(
        <div className="home">
            <Container className="homee">
                <Row>
                    <Col sm={4}>
                        <div>
                            <img src={lulu} alt="imagen de lulu" className="img_lulu"></img>
                        </div> 
                    </Col>
                    <Col sm={8} className="intro">
                    <h2>¡Hola! Soy</h2>
                    <h1 className="titulo">Luana Vallejos</h1>
                        <p className="descripcion">Desarrolladora Fullstack JS, estudiante de Informática y fan de los gatitos 💖</p>
                        <div className="botones">
                            <CustomButton texto="Contacto" link="#contacto"/>

                            <CustomButton texto="Descargar CV"/>
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