import React from 'react'
import "./Aboutfooter.css"
import pic from "./phone.jpg"
import {BsFillPlayFill} from "react-icons/bs"
import {AiOutlineApple} from "react-icons/ai"
const Aboutfooter = () => {
  return (
    <div className="abouthead">
         <div className="aboutfooter">
          <img src={pic} alt="" />
          <div className="sidefoot">
          <div className="leftfooter row col-12 col-md-6 col-lg-6">
        <h1 className="">Are you hungry?</h1>
        <p>Download the app now and easy to order your favorite restaurant around you.</p>
        </div>
        <div className="rightfooter  col-12 col-md-6 col-lg-6">
            <div className="first">
            <BsFillPlayFill className='ic' />
            <div className="infofoot">
                <span>GET IT ON</span>
                <h3>Google Play</h3>
            </div>
            </div>
            <div className="second">
            <AiOutlineApple className='ic' />
            <div className="infofoot">
                <span>Download on the</span>
                <h3>App Store</h3>
            </div>

           </div>
        </div>
          </div>
        
      
    </div>
    </div>
   
  )
}

export default Aboutfooter