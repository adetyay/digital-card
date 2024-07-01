import React from 'react'

function Info() {
  return (
    <div className='info'>
      <img src="assets/c.jpeg"/>
      <h1>aditya</h1>
      <p className='work'>frontend developer & gamer</p>
      <p className='website'>aditya.website</p>
      <div className='button'>
      <a href="#" ><button className='email-btn'><i class="fa-solid fa-envelope"></i> email</button></a>
      <a href="https://x.com/adetyayy" target='_blank'><button className='twitter-btn'><i class="fa-brands fa-x-twitter"></i> twitter</button></a>
      </div>
    </div>
  )
}

export default Info