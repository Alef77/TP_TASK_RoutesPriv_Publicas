import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NuevoForm } from './formActualizacion';

export const ActualizarJoven=()=> {

  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)} className="btn btn-dark" type="button" >🔧 Configuracion de Perfil</Button><hr></hr>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-xl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-xl">
                 Actualizar Datos Personales
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalBody" >
            <NuevoForm />
        </Modal.Body>
      </Modal>
    </>
  );
}