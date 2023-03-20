import React from 'react'
import "./Paket.css"
import CountUp from 'react-countup';
const Paket = () => {
  return (
    <div className="pakets">
        <div className="row text-center">
        <div className="plus col-6 col-md-4 col-lg-3">
        <CountUp end={1432} className="h1" />
            <span className="h1">+</span>
            <p className='p'>Merchant</p>
        </div>

        <div className="plus  col-6 col-md-4 col-lg-3">
        <CountUp end={1211} className="h1"  />
        <span className="h1">+</span>
            <p className='p'>Courier</p>
        </div>

        <div className="plus  col-6 col-md-4 col-lg-3">
        <CountUp end={14} className="h1" />
        <span className="h1" >K+</span>
            <p className='p'>App downlooaded</p>
        </div>

        <div className="plus col-6 col-md-4 col-lg-3">
        <CountUp end={4} className="h1" />
        <span className="h1">.7</span>
            <p className='p'>Rating Application</p>
        </div>
        </div>
       
    </div>
  )
}

export default Paket