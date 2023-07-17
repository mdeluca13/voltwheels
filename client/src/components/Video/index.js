import React from 'react'
import videoBg from './tesla.mp4';
import './video.css'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To the world of Electric Cars. Explore Now...</p>
        </div>
    </div>
  )
}

export default Main
