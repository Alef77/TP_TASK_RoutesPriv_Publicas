import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ActualizarJoven } from '../formularios/modalActualizacion';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import {  useNavigate } from 'react-router-dom';
// import userIcon from '../../../images/'lgante.jpg' ';
// import styles from '../../../../styles/index.css';
// import lgante from '../../../images/lgante.jpg';

export const Barralat= ()=> {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // cerrar secion
  const {logout}= useContext(AuthContext)
  const navigate= useNavigate();

  const onLogout= ()=>{
    
    logout();
    
    navigate('/Home',{
      replace:true
    })
    
  }

  return (
    <>
      <Button variant="link" onClick={handleShow}>
      <img className="userIcon"
        src='images/lgante.jpg'
        width="70" 
        />
      </Button>

      <Offcanvas id="offca" className="bg-dark" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-white mx-auto" >Dowhile Jhonson</Offcanvas.Title>
        </Offcanvas.Header>
          <a className="mx-auto"><img className='userIcon'
        src='images/lgante.jpg' 
        width="170"
        /></a>
        <Offcanvas.Body  style={{ marginTop: '50px' }} >
        
          <ActualizarJoven />
          <button className="btn btn-dark" type="button" >📢 Notificaciones</button><hr></hr>
          <button className="btn btn-dark" type="button" >📩 Mensajes</button><hr></hr>
          <button className="btn btn-dark" type="button" >💼 Mis Postulaciones</button><hr></hr>
          <button className="btn btn-dark" type="button" >❓ Cupos Disponibles</button><hr></hr>
          <button className="btn btn-dark" type="button" onClick={onLogout} >❌ Cerrar Sesion</button><hr></hr>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



