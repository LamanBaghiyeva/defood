import React from 'react'
import "./Footerfirst.css"
import pic from "../assets/images/logowhite.png"
import {CiFacebook} from "react-icons/ci"
import {FiInstagram} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
import {FiYoutube} from "react-icons/fi"
const Footerfirst = () => {
  return (
    <div className='foot'>
    <footer >
        <div className="left">
            <img src={pic} alt="" />
            <p className='text-white mt-4  '>Defood is a template kit for WordPress elementor templates. Designed for food delivery  services.</p>
        </div>
        <div className="middlefirst">
            <h3 className='text-white '>Compony</h3>
            <a href="#footer">About Us</a>
            <a href="#footer">Team</a>
            <a href="#footer">Career</a>
            <a href="#footer">Partner</a>
            <a href="#footer">News & Blog</a>
        </div>
        <div className="middlesecond">
         <h3 className='text-white '>Support</h3>
            <a href="#footer">Help Center</a>
            <a href="#footer">FAQ</a>
            <a href="#footer">My Account</a>
            <a href="#footer"> Become Partner</a>
            <a href="#footer">Community</a>
        </div>
        <div className="right">
            <h3 className='text-white '>Get in Connect</h3>
            <div className="social">
                <a href="#footer"><CiFacebook/></a>
                <a className="ms-3 me-3 " href="#footer"><FiInstagram/></a>
                <a href="#footer"><FiTwitter/></a>
                <a className="ms-3 me-3 " href="#footer"><FiYoutube/></a>
            </div>
        </div>

    </footer>
     <div className="footer">
     <p className='text-white '>Copyright © 2021 defood, All rights reserved. Present by MoxCreative.</p>
     <div className="links">
     <a href="#footer">Privacy Policy</a>
     <a className="ms-4 me-4" href="#footer">Cookie Policy</a>
     <a href="#footer">Term & Services</a>
     </div>
     
 </div>
 </div>
  )
}

export default Footerfirst