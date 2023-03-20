import React from 'react'

import {BsDot} from "react-icons/bs"

const Cards = ({mealname, mealtext,mealpic,chef, date,button}) => {
  return (
        <div className="card col-12 col-md-6 col-lg-4 ms-2 me-2 mt-3" data-aos="flip-down">
      <div className="img">
      <a><img src={mealpic} className="card-img mt-2 w-100"  alt="..."/></a>
      </div>
      <a href="">{button}</a>
      <div className="card-body">
      <h5 className="card-title">{mealname}</h5>
      <p className="card-text">{mealtext}</p>
      <p className='p'>{chef} <BsDot/> {date}</p>
    </div>
  </div>  )
}

export default Cards