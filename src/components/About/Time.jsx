import React from 'react'
import "./Time.css"
import {AiOutlineHome} from "react-icons/ai"
import {SlBasketLoaded} from "react-icons/sl"
import {BiSupport} from "react-icons/bi"
const Time = () => {
  return ( 
    <div className="time " >
      <div className="timehead text-center">
      <p className='pt-3'>WHY DEFOOD?</p>
        <h1>We Care for Your Precious Time.</h1>
      </div>
        
        <div className="totalcards">
        <div className="row">
            <div className="cardone col-12 col-md-6 col-lg-4 text-center" data-aos="flip-left">
                <AiOutlineHome className="door"/>
                <h3>The Best Restaurants</h3>
                <p className='w-100'>Leo erat ad dapibus vestibulum eget ex imperdiet ornare interdum.</p>
            </div>
            <div className="cardtwo  col-12 col-md-6 col-lg-4 text-center" data-aos="flip-left">
              <SlBasketLoaded className='door'/>
              <h3>The Best Courier</h3>
              <p className='w-100'>Leo erat ad dapibus vestibulum eget ex imperdiet ornare interdum.</p>
            </div>
              <div className="cardthree col-12 col-md-6 col-lg-4 text-center" data-aos="flip-left">
                  <BiSupport className='door'/>
                  <h3>24/7 Support</h3>
                  <p className='w-100'>Leo erat ad dapibus vestibulum eget ex imperdiet ornare interdum.</p>
              </div>
        </div>
        </div>
       
    </div>
  )
}

export default Time