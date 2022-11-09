import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export const Navbar = () => {
    return (



        <header  >

            <nav className="navbar navbar-expand-lg navbar-dark bg-lingth static-top  ">

                <Link
                    className="navbar-brand "
                    to="/"
                >
                    Inicio
                </Link>

                <div className="navbar-collapse d-flex justify-content-end  ">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link   ${isActive ? 'active' : ''} `}
                            to="/Login"
                        >
                            Iniciar Secion
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link   ${isActive ? 'active' : ''} `}
                            to="/Contacto"
                        >
                            Contacto
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''} `}
                            to="/Registrarse"
                        >
                            Registro
                        </NavLink>
                    </div>



                </div>
            </nav>

            <section className="textos-header" >
                <h1>C O N N E  C T </h1>
                <h2>WORK</h2>
            </section>


            <div className="wave" style={{height: '150px', overflow: 'hidden'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style={{height: '100%', width: '100%'}} >
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style={{stroke: 'none', fill: '#fff'}}>

                </path>
            </svg>
            </div>

        </header>

    )
}