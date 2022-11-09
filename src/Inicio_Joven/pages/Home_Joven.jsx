import React from 'react';

import {Footer} from '../../UI/components/footer' ;
import { CardsOffer } from '../components/cardsOffer';
import { NavbarJoven } from '../components/navbarJoven';


export const Joven = () => {
  return (
    <>
    <NavbarJoven />
    <CardsOffer />
    <Footer />
    </>
  )
}
