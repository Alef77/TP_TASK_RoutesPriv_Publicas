import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const FormBussines = () => {
  return (
    <>
     <Card id="formActu" className="text-center mx-auto">
      <Card.Header>Completar Datos de la Empresa</Card.Header>
      <Card.Body>
      
        <Card.Text>
        <Form>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Perfil Empresa</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Nombre Empresa
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Lgante" required/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Correo Empresa
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="@example.com" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Domicilio Empresa
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Barrio Mz Cs" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Nº Telefono Empresa
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" placeholder="+54 " />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Actividad Empresa
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="RHH" />
        </Col>
      </Form.Group>
      <Button type="submit" variant="primary">Actualizar</Button>
    </Form>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}
