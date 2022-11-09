import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const FormOffer = () => {
  return (
    <>
     <Card id="formActu" className="text-center mx-auto">
      <Card.Header>Crear Oferta Laboral</Card.Header>
      <Card.Body>
      
        <Card.Text>
        <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Tipo de oferta
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Lgante" required/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Especialidad
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Tec" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Descripcion
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Barrio Mz Cs" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Nº Cupos Diponibles
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" placeholder="1-4" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Estado Oferta: 
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="RHH" />
        </Col>
      </Form.Group>
      <Button type="submit" variant="primary">Guardar</Button>
    </Form>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}
