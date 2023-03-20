import React from 'react'
import "../Pages/Error.css"
import pic from "../assets/images/cat.png"
import {Link} from "react-router-dom"
const Error = () => {
  return (
      <div className="error">
        <h1 className='mb-3'>404</h1>
        <h2  className='mb-3'>Page Not Found!</h2>
        <p  className='mb-3'>The page you are trying to reach does not exist or has been moved.</p>
        <Link to="/">Back Home</Link>
        <img src={pic} alt="" />
      </div>
  )
}

export default Error