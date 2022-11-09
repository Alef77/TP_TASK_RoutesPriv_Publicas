import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from "react-router-dom";
import { PaginaPrincipal } from './PaginaPrincipal';
// import { NavbarEmpresa } from '../src/Inicio_Empresa/components/navbarEmpresa';

import './style.css'
import { FormPrueba } from '../formPrueba';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    < BrowserRouter>
  
      <PaginaPrincipal />
    
    </BrowserRouter>
  </React.StrictMode> 
)

