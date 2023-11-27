import React from 'react'
import denemeFotograf from '../assets/motivasyon.jpg'

function Home() {
  return (
    <div className='home'> 
    <h1>The Most Reliable Plumbing Services in San Francisco</h1>
    <p>We can supply you with top of the line plumbing, drain cleaning, sprinkler work, water heaters and much, much more! Don't hesitate to contact our team of professional plumbers today.</p>
    <img src={denemeFotograf} />
    </div>
  )
}

export default Home