import React from 'react'
import { Targetas } from '../components/Targetas'
import {Footer} from '../../UI/components/footer' 

export const Login = () => {
  return (
    <>
        <h1>Ey Bienvenido de vuelta</h1>
        <p style={{textAlign: 'center' }} > Estas listo para encontrar un trabajo? </p>

        <Targetas/>

        <Footer/>
        
    </>
  )
}

