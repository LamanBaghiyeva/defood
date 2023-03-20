import React from 'react'
import "./Achivement.css" 
import pic from '../About/man.jpg'
import {TiTickOutline} from "react-icons/ti"
const Achivement = () => {
  return (
    <div className="achivement">
      <div className="row">
      <div className="leftachivement col-12 col-md-6 col-lg-6">
        <p>ACHIEVEMENTS</p>
        <h1>Our Greatest Accomplishment</h1>
        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
        <div className="leftblog mt-5 ms-2">
          <div className="leftblogtimeone">
            <p className='text-dark'>2017</p><span className='ms-3 span'>---------------------</span>
            <div className="leftbloginfo">
              <ul>
                <li><TiTickOutline className='tick me-2'/>Most Innovative Company</li>
                <li><TiTickOutline className='tick me-2'/>The Best Service by Governor</li>
                <li><TiTickOutline className='tick me-2'/>1st Brand from Government</li>
              </ul>
            </div>
          </div>

          <div className="leftblogtimeseond">
            <p className='text-dark'>2018</p><span className='ms-3 span'>---------------------</span>
            <div className="leftbloginfo">
              <ul>
                <li><TiTickOutline className='tick me-2'/>Most Innovative Company</li>
                <li><TiTickOutline className='tick me-2' />The Best Service by Governor</li>
                <li><TiTickOutline className='tick me-2' />1st Brand from Government</li>
              </ul>
            </div>
          </div>

          <div className="leftblogtimethree">
            <p className='text-dark'>2020</p><span className='ms-3 span'>---------------------</span>
            <div className="leftbloginfo">
              <ul>
                <li><TiTickOutline className='tick me-2' />Most Innovative Company</li>
                <li><TiTickOutline className='tick me-2' />The Best Service by Governor</li>
                <li><TiTickOutline className='tick me-2'/>1st Brand from Government</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rightachivement ">
        <img src={pic} alt="" />
      </div>
      </div>
    

    
    </div>
  )
} 

export default Achivement