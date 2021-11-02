import React, {useState, useEffect} from 'react';
import './harry.css';
import Card from 'react-bootstrap/Card';
import {Container,Row} from 'react-bootstrap';


const HarryP = () => {

    const [personajes,setPersonajes] = useState();

        useEffect (()=> {
            fetch('http://hp-api.herokuapp.com/api/characters/students')
            .then(response => response.json())
            .then(personajes => setPersonajes(personajes))
        })

    return (
        <Container>
            {personajes?
            <Row className="containerr">
            {personajes.map((personaje,index) =>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={personaje.image} key={index} />
                <Card.Body>
                    <Card.Title>{personaje.name}</Card.Title>
                    <Card.Text>
                        Casa: {personaje.house}
                    </Card.Text>
                </Card.Body>   
                </Card>
                )}
            </Row>
            : <div>Cargando elementos...</div>}
        </Container>
        

    )
}

export default HarryP;