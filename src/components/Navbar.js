import React from 'react'
import {Link} from 'react-router-dom'

//Image
import KosterLogo from '../assets/images/Koster-1.png'

//styling
import '../styles/_navbar.scss'

export default function Navbar() {
  return (
    <div className='NavbarContainer'>

      <div>

        <Link to='/'><img src={KosterLogo} alt='Logo'/></Link>

      </div>

      <div>

        <Link to='/bierkaart'>Bierkaart</Link>

      </div>

    </div>
  )
}
