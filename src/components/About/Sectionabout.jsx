import React from 'react'
import "./Sectionabout.css"
import pic from "../About/food.jpg"
const Sectionabout = () => {
  return (
    <div className="sectionabout ">
        <div className="sectionhead text-center">
        <h1>Straight out of the oven to your doorstep</h1>
        <p className='text-dark pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="sectoinbottom pt-5">
            <div className="row">
            <div className="leftsection col-12 col-md-6 col-lg-4" >
                <img className="" src={pic} alt="" />
            </div>

            <div className="rightsection  col-12 col-md-6 col-lg-4 ms-4">
                <p>THE STORY</p>
                <h1>Best Service to fulfill your expectations.</h1>
                <p className='text-dark pb-4 mt-3'>Suscipit tempus ligula nullam. Litora natoque nulla bibendum urna sociosqu. Penatibus cras quis curae mollis porta at phasellus. Auctor pede consequat letius. Tempor lectus curabitur arcu tortor netus etiam. Feugiat odio mauris consectetuer dignissim.</p>
                <a href="#abouthead" className='text-white'>Discover More</a>
            </div>
            </div>
           
        </div>

       
    </div>
  )
}

export default Sectionabout