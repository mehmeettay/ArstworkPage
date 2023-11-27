import React from 'react'
import Logo from '../assets/logo.jpg'
import homeicon from '../assets/homeicon2.png'
import calendaricon from '../assets/calendar.png'
import phoneicon from '../assets/phone-call.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
           <Link to="/"><img src={Logo}/></Link> 
            <h2>Arstwork</h2>

        </div>
        
        <div className='rightSide'>
            <img src={homeicon}/>
            <Link to='/'>Ana Sayfa</Link>
            <img src={calendaricon}/>
            <Link to='/randevu'>Randevu Al</Link>
            <img src={phoneicon}/>
            <Link to='/iletisim'>İletişim</Link>
        </div>

    </div>
  )
}

export default Navbar