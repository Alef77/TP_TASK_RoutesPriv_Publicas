import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ContactoForm = () => {
  return (
     <>

   <div id="contactoForm" className="card mx-auto">

   <Form>
      <Form.Group className="mb-3" controlId="NombreYapellido">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu correo electrónico con nadie más..
        </Form.Text><br></br>
        <Form.Select aria-label="Default select example">
      <option>Tipo de Usuario</option>
      <option value="1">Busco Trabajo</option>
      <option value="2">Soy Empresa</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
  <div className="card-body">
    
  </div>
</div>
     </>
  )
}
