import React from 'react'
import { useEffect } from 'react';

//styling
import '../styles/_login.scss'

export default function login() {

const Redirect = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          // 👇️ redirects to an external URL
          window.location.replace('https://admin.bierbrasseriekoster.nl/admin');
        }, 1000);
    
        return () => clearTimeout(timeout);
      }, []);
}

Redirect()

  return (
    <div className='LoginContainer'>

        <h1>Redirecting to Login...</h1>

    </div>
  )
}
