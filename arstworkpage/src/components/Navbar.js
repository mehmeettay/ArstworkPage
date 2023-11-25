import React from 'react'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo}/>
            <h2>Arstwork</h2>

        </div>
        <div className='rightSide'>
            
            <Link to='/'>Ana Sayfa</Link>
            <Link to='/randevu'>Randevu Al</Link>
            <Link to='/iletisim'>İletişim</Link>
        </div>
    </div>
  )
}

export default Navbar