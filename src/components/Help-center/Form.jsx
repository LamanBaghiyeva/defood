import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { GoLocation } from "react-icons/go"
import {BiSupport} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import "../Help-center/Form.css"
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v13z2jg', 'template_329es5o', form.current, 'cd5sEgdvyus7nywtg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  // form.current.reset()

  return (
    <div className='form'>
      <div className="row col-12 col-md-6 col-lg-8">
           <form onSubmit={sendEmail} ref={form} className="left ">
          <p>Contact</p>
          <h2 className='pb-3'>Get in Touch</h2>
          <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="personalinfo">
            <div className="mb-3 name">
              <label for="exampleFormControlInput1" className="form-label ">Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" name='name'/>
            </div>
            <div className="mb-3 mail">
              <label for="exampleFormControlInput1" className="form-label">Email </label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='mail'/>
            </div>
          </div>
          <label for="exampleFormControlInput1" className="form-label ">Search</label>
          <input type="text" className="form-control search " id="exampleFormControlInput1" placeholder="Subject" name='subject'/>
          <div className="mb-5">
            <label for="exampleFormControlTextarea1" className="form-label mt-3">Message</label>
            <textarea type="text" className="form-control text" id="exampleFormControlInput1" placeholder="Message" name='message' />
          </div>
          <button>Submit</button>
        </form>
       

        <div className="right col-12 col-md-6 col-lg-4 ps-5">
          <p>Direction</p>
          <h2>Need More Information or Help?</h2>
          <p className='text-dark'>Don’t hesitate to directly contact or visit our office.</p>

          <div className="box">

            <div className="infos d-flex">
              <GoLocation className='icon' />
              <div className="info">
                <h3 className='text-dark h3'> Headquarters</h3>
                <p className='text-dark'>Jl Cempaka Wangi No 22 - Jakarta, Indonesia</p>
              </div>

            </div>

            <div className="infos d-flex mt-2 mb-2">
              <BiSupport className='icon' />
              <div className="info">
                <h3 className='text-dark h3'>Support Center</h3>
                <p className='text-dark'>+6221.2002.2012</p>
              </div>

            </div>

            <div className="infos d-flex">
              <AiOutlineMail className='icon' />
              <div className="info">
                <h3 className='text-dark h3'>
                  Email Us</h3>
                <p className='text-dark'>support@yourdomain.tld</p>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Form