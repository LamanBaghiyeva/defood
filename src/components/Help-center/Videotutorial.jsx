import React from 'react'
import "../Help-center/Videotutorial.css"
import {BiBookBookmark} from "react-icons/bi"
import {BsPlayCircle} from "react-icons/bs"
import {BiChat} from "react-icons/bi"
import {MdKeyboardArrowRight} from "react-icons/md"
const Videotutorial = () => {
  return (
    <div className="videotutorial">
         <div className="row ">
        <div className="card pb-3"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
       <BiBookBookmark className='icon'/>
        <div className="card-body">
            <h5 className="card-title text-dark">Knowledge Base</h5>
            <p className="card-text">Leo erat ad dapibus vestibulum eget ex imperdiet ornare interdum.</p>
            <a className ="pb-3" href="#" >Learn more <MdKeyboardArrowRight className='arrow ' /></a>
        </div>
    </div>

    <div className="card ms-3 me-3"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <BsPlayCircle className='icon'/>
        <div className="card-body">
            <h5 className="card-title text-dark">Video Tutorial</h5>
            <p className="card-text">Leo erat ad dapibus vestibulum eget ex imperdiet ornare interdum.</p>
            <a href="#" className ="pb-3">Watch Video <MdKeyboardArrowRight className='arrow'/></a>
        </div>
    </div>

    <div className="card pb-3"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
      <BiChat className='icon' />
        <div className="card-body">
            <h5 className="card-title text-dark ">Ticket</h5>
            <p className="card-text">Leo erat ad dapibus vestibulum eget ex imperdiet ornare interdum.</p>
            <a href="#" className ="pb-3">Get Help <MdKeyboardArrowRight className='arrow'/></a>
        </div>
    </div>
    </div>
    </div>
   
    
  )
}

export default Videotutorial