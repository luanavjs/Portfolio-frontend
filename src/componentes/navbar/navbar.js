import React from 'react';
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="menu" fixed="top">
            <Container>
            <Navbar.Brand href="#home">Luana</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#skills">Conocimientos</Nav.Link>
                <Nav.Link href="#proyectos">Proyectos</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}

export default Menu;