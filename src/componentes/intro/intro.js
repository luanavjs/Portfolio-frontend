import React from 'react';
import './intro.css';
import kitty from './kitty.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Intro = ({titulo}) => {
    return (
        <div>
            <header className="header">
            <Container>
                <Row>
                    <Col sm={4}>
                        <img src={kitty} alt="imagen de kitty" className="kitty"></img>
                    </Col>
                    <Col sm={8}>
                    <h2>¡Hola! Soy</h2>
                    <h1>{titulo}</h1>
                        <p className="descripcion">Desarrolladora Fullstack JS, estudiante de Licenciatura en Informática y fan de los gatos.</p>
                    </Col>
      
                </Row>
            </Container>
                    
            </header>
        </div>
    )
} 

export default Intro;