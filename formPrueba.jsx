import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export const FormPrueba = () => {

  const [state,setState]= useState({})



  
  const getValue= async({target})=> {


    setState({
        ...state,
        [target.name]:target.value
    });

    console.log(state)

  }
  
    return (
    <>
    <Form className='mx-auto' style={{marginRight: '30px', marginLeft: '30px' }} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control name="nombre" type="text" onChange={getValue} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>edad</Form.Label>
        <Form.Control name="edad" type="number" onChange={getValue} />
      </Form.Group>
      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>     
    </>
  )
}
