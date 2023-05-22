import React from 'react'

//useFetch
import useFetch from '../hook/useFetch'

//styling
import '../styles/_bier.scss'

export default function AlcoholVrijBier() {

    const {loading, error, data} = useFetch('https://admin.bierbrasseriekoster.nl/api/alcohol-vrijs?populate[AlcoholVrij][populate]=AlcoholVrijInfo')

    if(loading) return <p>Loading...</p>
    if(error) return <p> Error </p>

  return (
    <div className='BierContainer'>
        <h1>Alcohol Vrij Bier</h1>
        <div className='BierLine'></div>

        {data.data.map(Array => (
            <div key={Array.id}>{Array.attributes.AlcoholVrij.map(Array2 => (
                    
                    <div key={Array2.id}>
                        <div className='BierBedrijfNaam'>{Array2.BedrijfNaam}</div>

                        <div>
                            {Array2.AlcoholVrijInfo.map(Array3 => (
                                <div className='BierDottedList' key={Array3.id}>
                                    <ul className="leaders">
                                        <li>
                                            <span>{Array3.BierNaam}</span>
                                            <span>{Array3.Inhoud}</span>
                                            <span>{Array3.Percentage}</span>
                                            <span>€{Array3.Prijs}</span>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                ))}
            </div>
        ))}
    </div>
  )
}
