import React from 'react'

//useFetch
import useFetch from '../hook/useFetch'

//styling
import '../styles/_bier.scss'

export default function BelgischBier() {

    const {loading, error, data} = useFetch('http://admin.bierbrasseriekoster.nl/api/belgisches?populate[BelgischBier][populate]=BelgischBierInfo')

    if(loading) return <p>Loading...</p>
    if(error) return <p> Error </p>

  return (
    <div className='BierContainer'>
        <h1>Belgisch Bier</h1>
        <div className='BierLine'></div>

        {data.data.map(Array => (
            <div key={Array.id}>{Array.attributes.BelgischBier.map(Array2 => (
                    
                    <div key={Array2.id}>
                        <div className='BierBedrijfNaam'>{Array2.BedrijfNaam}</div>

                        <div>
                            {Array2.BelgischBierInfo.map(Array3 => (
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
