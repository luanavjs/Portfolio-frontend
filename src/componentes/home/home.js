import React from 'react';
import './home.css';
import Intro from '../intro/intro'
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';

const Home = () => {
    return(
        <div className="home">
            <Intro titulo="Luana Vallejos"/>
            <Container>
                <h2 className="puntos">Skills</h2>
                <Row>
                    <Col xs={12} sm={4}>
                        Manipulation
                    </Col>
                    <Col xs={12} sm={4}>
                        Psychological abuse
                    </Col>
                    <Col xs={12} sm={4}>
                        Being perfect
                    </Col>
                </Row>
                <h2 className="puntos">Experiencia laboral</h2>
                <ul className="exp-laboral">
                    <li>
                        <h5>Primer trabajo</h5>
                        <p>Lorem ipsum dolor</p>
                    </li>
                    <li>
                        <h5>Segundo trabajo</h5>
                        <p>Lorem ipsum dolor</p>
                    </li>
                </ul>
            </Container>
            
            
            <Link to="/contacto">Ir a Contacto</Link>
        </div>
    );
}

export default Home;