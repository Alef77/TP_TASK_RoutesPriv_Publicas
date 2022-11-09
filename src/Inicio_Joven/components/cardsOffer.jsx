
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { InfoEmpresa } from '../components/ModaInfoOffers';


import React, { useState, useEffect } from 'react';

export const CardsOffer = () => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const [mostrar, setMostrar] = useState([])

  const fetchData = async () => {
    fetch("http://localhost:3000/offer", requestOptions)
      .then(response => response.json())
      .then(result => setMostrar(result.arrayOffers))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    console.log('Se a alcanzado el render')
    fetchData()
  }, [])




  return (

    <div  className="row rows-cols-1 row-cols-md-3 g-3" id="contCards" >
  
    {

      
      
      mostrar.map((item, index) => (
        
        <div className="card mb-3" style={{ maxWidth: "100%", marginRight: '5px', }} id="targetOffer"  >
        <div className="row g-0">

        <div className="col-md-4" id='img-ofertas' >
          <img src="images/testimonio1.jpg" className='img-fluid rounded-start'  alt="" />
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.nameEmpresa}</h5>
            <p className="card-text"><strong>Descripcion: </strong>  {item.description}</p>
        <p className="card-text"><strong>Tipo de Oferta: </strong> {item.typeOffer}</p>
           <p className="card-text"><strong>Estado: </strong> {item.isActive ? 'oferta Activa' : 'No disponible'}</p>
           <p className="card-text"><strong>Cupos Disponibles: </strong> {item.amountOffer}</p>
           <InfoEmpresa item ={item} />
          <button id="buttons" className="btn botonTargetasP " type="button">Postularse</button>
          </div>
        </div>
      </div>

</div>

))



}
</div>
   



  )
}

{/* // <Row xs={2} md={5} className="g-4">
//    {mostrar.map((item, index) => ( */}
{/* //     <Col>
//       <Card id="targetOffer" >
//       <img src="images/oferta.png" alt="" />
//         <Card.Body>
//           <Card.Title>{item.nameEmpresa}</Card.Title>
//           <Card.Text>
//           <p className="card-text"><strong>Descripcion: </strong>  {item.description}</p>
//           <p className="card-text"><strong>Tipo de Oferta: </strong> {item.typeOffer}</p>
//           <p className="card-text"><strong>Estado: </strong> {item.isActive ? 'oferta Activa' : 'No disponible'}</p>
//           <p className="card-text"><strong>Cupos Disponibles: </strong> {item.amountOffer}</p>
//           </Card.Text>
//         </Card.Body>
//           <div className="d-grid gap-2 d-md-block mx-auto ">
//           <InfoEmpresa item ={item} />
//           <button id="buttons" className="btn botonTargetasP " type="button">Postularse</button>
//         </div>
//       </Card>
//     </Col>
//   ))}
// </Row> */}