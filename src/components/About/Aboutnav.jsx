import React from 'react'
import "../About/Aboutnav.css"
import about from "../About/about.png"
const Aboutnav = () => {
  return (
    <div className="aboutnav" id="abouthead">
        <div className="leftaboutnav">
        <h1 className='mb-3'>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="rightaboutnav">
            <img src={about} alt="" />
        </div>
    </div>
  )
}

export default Aboutnav