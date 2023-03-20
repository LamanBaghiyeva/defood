import React,{useRef} from 'react'
import "./ArchivesSection.css"
import pic from "../assets/images/girl.png"
import {BiSearchAlt2} from "react-icons/bi"
const ArchivesSection = () => {

    //Search
    const search= useRef()
    
    const searchbotton=(e)=>{
        e.preventDefault()
        const clicked=e.target
        if(clicked.classList.contains("search"))
        search.current.reset()
     }
  
  
  return (
    <div className='archive'>
        <div className="row">
            <div className="left col-12 col-md-6 col-lg-8">
            <h1 className='mb-4'></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
           <div className="input">
           <input className="mt-4" type="text" name="" id="" placeholder='Search...' ref={search}></input>
           <button>
           <BiSearchAlt2 className='search' onClick={searchbotton} />
           </button>
           </div>

            </div>
            <div className="right col-12 col-md-6 col-lg-4">
                <img src={pic} alt="" />
            </div>
        </div>
       
    </div>
  )
}

export default ArchivesSection