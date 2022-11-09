import React from 'react'
import { Routes, Route, Navigate  } from "react-router-dom";

import { Home } from '../Page_Princ/pages/Home'

import { Registrarse } from '../Page_Princ/pages/Registrarse';
import { Joven } from '../Inicio_Joven/pages/Home_Joven';
import { Contacto } from '../Page_Princ/pages/Contacto';
import { Navbar } from '../UI/components';
import { Login } from '../Page_Princ/pages/Login';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <>

        <Navbar/>

        <Routes>

            
            <Route path="Home" element={<Home />} />
            <Route path="Contacto" element={<Contacto />} />
            <Route path="Registrarse" element={<Registrarse />} />
            <Route path="/" element={<Navigate to="/Home" />} />

            {/* ----------Rutas publicas------------ */}
            <Route path="/Login" element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            } >
            </Route>



            {/* ---------Rutas Privadas-------- */}
            <Route path='/*' element={ 
                <PrivateRoutes>
                  <Joven />
                </PrivateRoutes>  
              } >
            </Route>
           

        </Routes>
    </>
  )
}

