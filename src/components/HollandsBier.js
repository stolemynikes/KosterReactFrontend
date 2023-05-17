import React from 'react'

//useFetch
import useFetch from '../hook/useFetch'

//styling
import '../styles/_bier.scss'

export default function HollandsBier() {

    const {loading, error, data} = useFetch('http://admin.bierbrasseriekoster.nl/api/hollands?populate[HollandsBier][populate]=HollandsBierInfo')

    if(loading) return <p>Loading...</p>
    if(error) return <p> Error </p>

  return (
    <div className='BierContainer'>
        <h1>Hollands Bier</h1>
        <div className='BierLine'></div>

        {data.data.map(Array => (
            <div key={Array.id}>{Array.attributes.HollandsBier.map(Array2 => (
                    
                    <div key={Array2.id}>
                        <div className='BierBedrijfNaam'>{Array2.BedrijfNaam}</div>

                        <div>
                            {Array2.HollandsBierInfo.map(Array3 => (
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
