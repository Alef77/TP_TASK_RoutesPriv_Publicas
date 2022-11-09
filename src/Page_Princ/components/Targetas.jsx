import React from 'react'
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { ModalInicio } from './modal';

export const Targetas = () => {

    // const [cambiar, setCambiar ]= useState( 'Iniciar Secion' )

    // const Empresa=() =>setCambiar( cambiar== 'registrarse' )

    // const RemoveEmpresa= ()=> setCambiar( cambiar)

  return (

    <>


        <Card style={{ width: '25rem', margin: 'auto', textAlign: 'center', height: '20rem' }}>

            <CardHeader>

                <Card.Title> BUSCO TRABAJO - JOVENES</Card.Title>
                
            </CardHeader>
            <Card.Body className='body-targeta' >

                <Card.Text>
                    Empleo al instante 
                </Card.Text>

                <Card.Link href="#"> <ModalInicio /> </Card.Link>

            </Card.Body>
        </Card>

    </>
  )
}


