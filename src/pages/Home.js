import React from 'react'

//styling
import '../styles/_home.scss'
import ImageSwapper from '../components/ImageSwapper'

export default function Home() {
  return (
    <div className='HomeContainer'>
        

        <div className='StyledImg'>

          <ImageSwapper/>

        </div>

        <div className="HomeText">

          <h1>Welkom bij Bierbrasserie Koster!</h1>
          <p>Wij zijn een speciaal biercafé met altijd een ruim en wisselend bierassortiment. Door onze 10 taps hebben we altijd voor iedereen wat leuks te proeven. Voor een lekker wijntje, een verse cocktail of iets alcoholvrij kun je ook gewoon bij ons terecht. Daarnaast hebben we een ruime keuze aan heerlijke lokale kazen van Dijkman, diverse bittergarnituren, ossenworst, grillworst en nog meer. Ook beschikken wij over een ruime en gezellige binnentuin met ruim 70 zitplaatsen en een buitenbar!</p>
          <p>Heb je vragen of wil je weten wat de opties zijn voor grotere groepen? Stuur dan even een berichtje aan bierbrasseriekoster@gmail.com of bel ons op 06-18947755.</p>
          <p>Proost!</p>

        </div>
        
        
    </div>
  )
}
