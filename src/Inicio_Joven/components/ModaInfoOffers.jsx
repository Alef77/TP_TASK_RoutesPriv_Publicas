import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const InfoEmpresa = ({item}) => {

  //const id = item.id

  const [lgShow, setLgShow] = useState(false);






  /*var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };*/

  /*const [mostrarInfo, setMostrarInfo] = useState([])

  //fetch en una funcion 

  fetch(`http://localhost:3000/business/jwt/${id}`, requestOptions)
    .then(response => response.json())
    .then(result => setMostrarInfo(result.empresas))
    .catch(error => console.log('error', error));

    */

    // console.log(item)


  return (
    <>




      <Button id="buttons" className="btn botonTargetas " onClick={() => setLgShow(true)}>Ver mas</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className= " justify-content-end " >
            <h5 id="buttonPostulA" >
              Informacion extra empresa
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="row">
            <div className="col">
              <div className="card">
                <h5 className="card-header">Oferta</h5>
                <div className="card-body">
                  <p><strong>Oferta Activa: </strong>{ item.isActive ? 'oferta Activa' : 'No disponible' } </p>
                  <p><strong>Especialidad: </strong>{ item.speciality }</p>
                  <p><strong>Tipo de Oferta: </strong>{item.typeOffer}</p>
                  <p><strong>Descripcion: </strong> {item.description}</p>
                  <p><strong>Cupos Disponibles: </strong> {item.amountOffer}</p>
                 
                </div>
              </div>
            </div>
            <div className="col">



              <div className="row row-cols-1">
                <div className="col">
                  <div className="card">
                    <h5 className="card-header">Empresa</h5>
                    <div className="card-body">
                    <p><strong>Nombre: </strong>{item.companyID.nombreEmpresa}</p>
                    <p><strong>Actividad: </strong>{item.companyID.actividadEmpresa}</p>
                    <p><strong>Correo: </strong> {item.companyID.correoEmpresa}</p>
                    <p><strong>Telefono: </strong> {item.companyID.telefonoEmpresa}</p>
                    <p><strong>Domicilio: </strong> {item.companyID.domicilioEmpresa} </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card">
                    <h5 className="card-header">Dueño</h5>
                    <div className="card-body">
                      <p><strong>Nombre: </strong>{item.Owner.nombre}  </p>
                      <p><strong>Correo: </strong>{item.Owner.email} </p>
                      <p><strong>Especialidad: </strong>{item.Owner.especialidad} </p>
                    </div>
                  </div>
                </div>

              </div>





            </div>

          </div>


            <button id="buttonPostulAc" type="button" className="btn btn-warning">Postularse</button>
        </Modal.Body>
      </Modal>
    </>
  );
}

