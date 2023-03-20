import React from 'react'
import "./Sign.css"
import pic from "../Sign/delivery.png"
const Sign = () => {
  return (
    <div className="sign">
        <div className="row">
        <div className="leftsign col-12 col-lg-6 col-md-8" data-aos="fade-right">
            <img src={pic} alt="" />
        </div> 
        <div className="rightsign col-12 col-lg-6 col-md-4" data-aos="fade-left">
        <div className="signhead">
        <h1>Sign in</h1>
      <h4>Welcome Back, John Doe</h4>
      <p>Sign in with your email address or phone number.</p>
        </div>
        <div className="input">
        <div class="mb-3 input">
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Username or Email Address"/>
        </div>
        <div class="mb-3 input">
          <input type="text" class="form-control" id="exampleFormControlTextarea1" placeholder="Password"></input>
        </div>
        </div>
        <div className="check">
        <input type="checkbox" className='me-2' />
        <label htmlFor="">Remember me</label><br/>
        </div>
       <div className="button">
       <button>Log in</button>
       </div>
        <div className="fot">
        <p>Lost your password?</p>
        <p>Don’t have an account?<span> Create account.</span></p>
        </div>
        
        </div>
        </div>
       
    </div>
  )
}

export default Sign