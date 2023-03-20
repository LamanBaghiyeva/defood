import React from 'react'
import "./Partnership.css"
import {RiArrowDropRightLine} from 'react-icons/ri'
import pic from "../About/delivery.png"
import img from "../About/service.png"
const Partnership = () => {
  return (
    <div className="partnership">
        <div className="partnerhead text-center">
        <h1>Want to Join Partnership?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
       
        <div className="row">
            <div className="rowcardone text-center col-12 col-md-6 xol-lg-6" data-aos="zoom-in">
                <img src={pic} alt="" />
                <div className="rowcardinfo">
                <h4>Become A Courier</h4>
                <p>Pede luctus nam conubia mus suspendisse erat taciti nullam suscipit</p>
                <a  className="pb-2" href="">Earn Money<RiArrowDropRightLine /></a>
                </div>
                
            </div>

            <div className="rowcardtwo text-center col-12 col-md-6 xol-lg-6" data-aos="zoom-in">
                <img src={img} alt="" />
                <div className="rowcardinfo">
                <h4>Become A Merchant</h4>
                <p>Pede luctus nam conubia mus suspendisse erat taciti nullam suscipit</p>
                <a className="pb-2" href="">Learn More<RiArrowDropRightLine /></a>
            </div>
                </div>
              
        </div>
    </div>
  )
}

export default Partnership