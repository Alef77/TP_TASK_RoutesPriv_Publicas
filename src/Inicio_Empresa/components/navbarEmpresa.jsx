import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


// import { Barralat } from './barralat';


export function NavbarEmpresa() {
  return (
    <Navbar bg="dark"  variant="dark" expand="lg"  >
      <Container fluid>
            
      <Navbar.Brand  href="#home"  >
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
          id="navegacion"
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >


       
            <div className="navbar-collapse d-flex justify-content-end  ">
                <div className="navbar-nav">

                <Nav.Link href="#action2">Buscar Postulantes</Nav.Link>
            <Nav.Link href="#action2">Mis Pustulantes</Nav.Link>
            <Nav.Link href="#action2"><Form.Select className="bg-dark text-white" aria-label="Default select example">
                                        <option>Buscar Por Categoria</option>
                                        <option value="1">Tec Electricista</option>
                                        <option value="2">Tec Mecanico</option>
                                        <option value="3">Tec Informatico</option>
                                        <option value="1">Tec Quimico</option>
                                        <option value="2">Tec Electronico</option>
                                        <option value="3">Tec MMO</option>
                                        <option value="1">Tec Refrigeracion</option>
                                        <option value="2">Tec Mecatronica</option>
                                        <option value="3">Pastelero</option>
                                        <option value="1">Cocinero</option>
                                        <option value="2">Peluquero</option>
                                        <option value="3">Delivery</option>
                                        <option value="1">Chofer</option>
                                        <option value="2">Panadero</option>
                                        <option value="3">Mesero</option>
                                       </Form.Select></Nav.Link>
<Nav.Link href="#action2">Notificaciones 🔔 </Nav.Link>
                </div>
            </div>

        
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

