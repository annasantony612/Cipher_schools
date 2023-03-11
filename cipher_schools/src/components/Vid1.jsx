import React from 'react'
import videoBg from '../assets/videoBg.mp4'

const Vid1 = () => {
  return (
    <div className='main'>
        <div className="video"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
        
        </div>
    </div>
  )
}

export default Vid1