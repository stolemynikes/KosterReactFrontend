import React from 'react'

//styling
import '../styles/_bierkaart.scss'

import BelgischBier from '../components/BelgischBier'
import TapBier from '../components/TapBier'
import LokaalBier from '../components/LokaalBier'
import HollandsBier from '../components/HollandsBier'
import SpeciaalBier from '../components/SpeciaalBier'
import AlcoholArmBier from '../components/AlcoholArmBier'
import AlcoholVrijBier from '../components/AlcoholVrijBier'

export default function Bierkaart() {
  return (
    <div className='BierkaartContainer'>

      <TapBier/>
      <LokaalBier/>
      <BelgischBier/>
      <HollandsBier/>
      <SpeciaalBier/>
      <AlcoholArmBier/>
      <AlcoholVrijBier/>

    </div>
  )
}
