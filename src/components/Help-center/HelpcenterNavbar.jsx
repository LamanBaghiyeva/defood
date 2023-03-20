import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"
import "./HelpcenterNavbar.css"
const HelpcenterNavbar = () => {
  return (
        <div className="helpcenternavbar">
            <div className="img"></div>
            <div className="over">
                <div className="head">
                <h1>What can we help you with?</h1>
                <h4>Search here to get answers to your questions</h4>
                <div className="button">
                <input type="text" placeholder='Search...' />
                <button>
                <BiSearchAlt2 className='search' />
                </button>

                </div>
            
            </div>
            </div>
           
          
        </div>
 

  )
}

export default HelpcenterNavbar