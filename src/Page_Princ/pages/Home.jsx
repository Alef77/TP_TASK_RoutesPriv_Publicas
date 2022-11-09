import React from 'react'
import { Link } from 'react-router-dom';
import { Footer } from '../../UI/components/footer'
import { ContactoForm } from '../../UI/components/contacto'
import { useEffect } from "react";


import AOS from "aos";
import "aos/dist/aos.css";
import { InfoEmpresa } from '../../Inicio_Joven/components/ModaInfoOffers';

export const Home = () => {

  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <>


      {/* <h1>Bienvenido A Connect work! </h1> */}

        

      {/* ------------- botones de inicio----------------- */}
      {/* <p className="mx-auto" >Gracias a Connect Work, la búsqueda de empleo es más fácil que nunca. Tiempo parcial o tiempo completo, trabajos independientes o puestos de carrera, cuando utiliza nuestro sitio web, ¡puede encontrar el trabajo perfecto para usted en minutos! Encuentra tu vida laboral ideal, ademas estamos aquí para ayudarlo a ofrecerle sus servicios con solo tocar un botón. connect work es un producto galardonado de seguimiento de candidatos y coordinación a pedido que simplifica su contratación. </p> */}

      <div className="conteiner  text-center" >
        <div className="row">
          <div data-aos="fade-right" data-aos-duration="2000" className="col-sm-6">
            <Link to="/Registrarse">
              <img
                className="img-inicio "
                src="card_buscas.png"
              />
            </Link>
          </div>

          <div data-aos="fade-left" data-aos-duration="2000" className="col-sm-6">
            <Link to="/Registrarse">
              <img
                className="img-inicio "
                src="card_ofreces.png"
              />
            </Link>
          </div>

        </div>
      </div>


      <div className='contePasantias ' >

        <h2 style={{ textAlign: 'center', fontSize: '2em', fontFamily: 'unset', marginBottom: '40px' }}>
          En CONNECT WORK tambien te brindamos PASANTIAS!

        </h2>

        {/* <p style={{ textAlign: 'center', fontSize: '20px' }} > En CONNECT WORK tambien te brindamos PASANTIAS!</p> */}

        <div className="contenedor-Pasantias mx-auto">
          <img className='img-Pasantias' src='images/pasantias-inicio.png' alt="No se pudo cargar la imagen" />

          <div className="contenedor-text">

            <p>

              Con nuestras pasantías, podrás obtener la experiencia que
              necesitas para mejorar tu curriculum y tener más posibilidades
              de conseguir un trabajo. Nuestro programa de pasantías está diseñado para
              ayudarte a adquirir las habilidades y el conocimiento necesarios para tener
              éxito en tu carrera.

            </p>

          </div>
        </div>

      </div>




      <h2 className='linea'><span>Experiencias de algunos usuarios</span></h2>

      <div className="container-testimonios text-center ">
        <div className="row">
          <div data-aos="zoom-in" className="col-lg-4">
            <img src="images/testimonios-img2.jpeg" alt="" />

            <h2 className="fw-normal">Ezequiel Ramirez</h2>
            <p>La pagina esta buenisima se adapta mis necesidades, sencilla, comoda y facil de usar, seria muy bueno que mas empresas tambien la usen</p>

          </div>
          <div data-aos="zoom-in" className="col-lg-4">

            <img src="images/testimonios-img1.jpg" alt="" />

            <h2 className="fw-normal">Fernandez Alfonso</h2>
            <p>La organizacion y la facilidad de encontrar empleados son destacables, es la primera vez que utilizo una pagina para buscar empleados.</p>

          </div>
          <div data-aos="zoom-in" className="col-lg-4">
            <img src="images/testimonios-img3.jpg" alt="" />

            <h2 className="fw-normal">Luciana Maldonado</h2>
            <p>Por lo que me comentaron es facil de usar y con buenos resultados que me la presentaron, asi que vamos a ver que tal es mi experiencia aqui</p>

          </div>
        </div>
      </div>

      <h2 className='linea'><span>Contactanos</span></h2>

      <ContactoForm />
      <Footer />

    </>
  )
}
