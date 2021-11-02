import React from 'react';
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Menu = () => {
    return (
        <Navbar className="menu">
            <Container>
                <Navbar.Brand href="#home">Luana Vallejos</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
                <Nav.Link href="#pricing">Proyectos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Menu;