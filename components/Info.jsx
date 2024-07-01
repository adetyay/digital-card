import React from 'react'

function Info() {
  return (
    <div className='info'>
      <img src="assets/c.jpeg"/>
      <h1>Aditya</h1>
      <p className='work'>Frontend Developer</p>
      <p className='website'>aditya.website</p>
      <div className='button'>
      <button className='email-btn'><i class="fa-solid fa-envelope"></i> Email</button>
      <button className='twitter-btn'><i class="fa-brands fa-x-twitter"></i> Twitter</button>
      </div>
    </div>
  )
}

export default Info