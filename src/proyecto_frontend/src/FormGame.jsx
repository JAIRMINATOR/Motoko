import React from 'react'
import {Form, Button} from 'react-bootstrap';
const FormGame = () => {
  id= null,
          pTitle=null,
          pDesciption= null,
          pRating=null
          isEditable=null
    return(

  
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Ingresa el titulo del juego</Form.Label>
        <Form.Control type="text" placeholder="Poner titulo" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Ingresa la descricion</Form.Label>
        <Form.Control as="textarea" placeholder="Poner descricion " />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Ingresa el rating</Form.Label>
        <Form.Control type="number" placeholder="Poner rating" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar juego
      </Button>
    </Form>
  
    );
};

export default FormGame;