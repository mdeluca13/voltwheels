import React from 'react'
import videoBg from './tesla.mp4';
import { Link } from "react-router-dom";
import './video.css'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <Link to="/carlist">
          <div className="content">
            <h1>Get Started</h1>
            <p>The World of Electric Cars is waiting for you. Explore Now...</p>
        </div>
        </Link>
        
    </div>
  )
}

export default Main
