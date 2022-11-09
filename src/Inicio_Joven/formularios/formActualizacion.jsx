import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useState, useEffect } from 'react'

export const NuevoForm = () => {


  let myHeaders = new Headers();
  myHeaders.append("x-token", localStorage.getItem('x-token'));

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const [mostrarUsuario, setMostrarUsuario] = useState([])

  const fetchData = async () => {

    await fetch("http://localhost:3000/user/joven/priv", requestOptions)
      .then(response => response.json())
      .then(result => setMostrarUsuario(result.usuario))
      .catch(error => console.log('error', error));

  }


  useEffect(() => {
    fetchData()
  }, [])

  // ------------------PUT-----------------


    //Obtener datos input
    const [estado, setEstado]= useState({});

    const handleInput= ({target})=> {
      setEstado({
        ...estado,
        [target.name]:target.value
      })
    }
    // console.log(estado)
    
  const ActualizarDatos = () => {

    var myHeaders = new Headers();
    myHeaders.append("x-token",localStorage.getItem('x-token'));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({

      ...estado
      // "img": "foto de perfil",
      // "nombre": "Jose",
      // "email": "empresatest2@gmail.com",
      // "dni": 99087678,
      // "domicilio": "b° Lujan",
      // "telefonoUser": 3705679876,
      // "especialidad": "Carpintero",
      // "localidad": "Formosa"
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3000/user/63699ea825599d06d8e3659b", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    
  }


// console.log(estado)



  return (
    <Form>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Foto Perfil</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Nombre Completo
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" minLength={1} name="nombre" onChange={handleInput} placeholder={mostrarUsuario.nombre}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Correo ELectronico
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email"  minLength={1} name="email" onChange={handleInput} placeholder={mostrarUsuario.email} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          DNI
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" name="dni" onChange={handleInput} placeholder={mostrarUsuario.dni} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Domicilio
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" minLength={1} name="domicilio" onChange={handleInput} placeholder={mostrarUsuario.domicilio} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Nº Telefono
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" min={1} name="telefonoUser" onChange={handleInput} placeholder={mostrarUsuario.telefonoUser} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Cargo
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text"  minLength={1} name="especialidad" onChange={handleInput} placeholder={mostrarUsuario.especialidad} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Localidad
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" minLength={1} name="localidad" onChange={handleInput} placeholder={mostrarUsuario.localidad} />
        </Col>
      </Form.Group>
      <Button type="submit" variant="primary" onClick={ActualizarDatos} >Actualizar</Button>
    </Form>

  );
}

