import { useEffect, useState } from 'react';
import { proyecto_backend } from 'declarations/proyecto_backend';
import { Table, Card, Container, Row, Button, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FormGame from './FormGame';


function App() {
  const [game, setGame] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  useEffect(() =>{
    getGame();
  }, []);
  

  function getGame() {
    proyecto_backend.getAllGame().then(game => {
      console.log(game)
      setGame(games_motoko);
  
    });
     
  }

  function deleteGame(id) {
    Swal.fire("Eliminando juego, espere por favor");
    Swal.showLoading();
    proyecto_backend.deleteGame(BigInt(id)).then(game => {
      getGame();
  
    });
     
  }

  return (
    <Container className='m-3'>
    <Row>
        
        <Card>
            <Card.Body>
              <Row>
                <Col>
                <Card.Title>Lista de los juegos</Card.Title>
                </Col>
                <Col>
                <Button variant="success" onClick={() => navigate('/FormGame')}>Agregar pelicula</Button>
                </Col>

                </Row>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Titulo</th>
                      <th>Descripcion</th>
                      <th>Rating</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      game.length > 0 ?
                      game.map((game)=>(
                        <tr>
                          <td>{Number(game.id)}</td>
                          <td>{game.title}</td>
                          <td>{game.description}</td>
                          <td>{Number(game.rating)}</td>
                          <td>
                            <Row>
                              <Col>
                              <Button variant='info' onClick={()=> getGames(Number(game.id))}>Editar</Button>
                              </Col>
                              <Col>
                              <Button variant='danger' onClick={()=>deleteGames(Number(game.id))}>Eliminar</Button>
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      ))
                      :<tr></tr>
                    }
                  </tbody>
                </Table>
            </Card.Body>
        </Card>
    </Row>
    <Modal show={setShow}>
        <Modal.Header closeButton>
          <Modal.Title>Editar juego</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGame
          id={Number(game.id)}
          pTitle={game.title}
          pDesciption={game.description}
          pRating={game.rating}
          isEditable={true}
          />
        </Modal.Body>
      </Modal>
   </Container>
  );
}

export default App;
