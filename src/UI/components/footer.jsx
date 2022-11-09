import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
// import  '../../styles/index.css'
// import mapa from '../images/footerIPF.png'
// import facelogo from '../images/FacebookIcon.png';
// import githublogo from '../images/GitHubIcon.webp';
// import instagramlogo from '../images/instagramlogo.png';
// import twiterlogo from '../images/twiterlogo.png';

export function Footer() {

  let url=' https://goo.gl/maps/bP7hfgbSfXXeZ1zr7';
  return (
    <>

    
<div  id='footer1' className="row row-cols-1 row-cols-md-3">
  <div className="col">
    <div id="footerCol" classNameName="card h-101">
      <div className="card-body">
      <h2>Ubicación</h2>
            
            <a href={url}>
              <img 
                src='images/footerIPF.png ' 
                width="350px" 
              />
            </a>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div id="footerCol" className="card h-101">
      <div className="card-body">
      <h2>Nuestras Redes</h2>
                    <img
                    id="iconoss"
                    src='images/FacebookIcon.png'
                    width="40px"
                    className="mx-auto"
                    alt="ConnectWork logo"
                  />
                    <img
                    id="iconoss"
                    src='images/GitHubIcon.webp'
                    width="40px"
                    className="mx-auto"
                    alt="ConnectWork logo"
                  />
                  <img
                    id="iconoss"
                    src='images/instagramlogo.png'
                    width="40px"
                    className="mx-auto"
                    alt="ConnectWork logo"
                  />
                  <img lg="auto"
                    id="iconoss"
                    src='images/twiterlogo.png'
                    width="40px"
                    className="mx-auto"
                    alt="ConnectWork logo"
                    />

      </div>
    </div>
  </div>
  <div  className="col">
    <div id="footerCol" className="card h-101">
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
            <h6>c. todos los derechos e izquierdos reservados</h6>
    </div>
  </div>
</div>
    </>
  );
}
