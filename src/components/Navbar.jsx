import React, { useRef } from 'react'
import logo from "../assets/images/logo.png"
import "./Navbar.css"
import { IoMdArrowDropdown } from "react-icons/io"
import { FaBars } from "react-icons/fa"
import { IoMdArrowDropright } from "react-icons/io"
import {RxCross1} from "react-icons/rx"
import {Link} from "react-router-dom"
const Navbar = () => {

  //Dropdown
  const dropdown = useRef()
  const opendropdown = (e) => {
    const clicked = e.target
    if (clicked.classList.contains("drop")) {
      dropdown.current.classList.toggle("aktiv")
    }
  }


  const dropdowne = useRef()
  const opendropdowne = (e) => {
    const clicked = e.target
    if (clicked.classList.contains("drop")) {
      dropdowne.current.classList.toggle("aktiv")
    }
  }


  //Dropside
  const dropside = useRef()
  const opendropside = (e) => {
    const clicked = e.target
    console.log(clicked)
    if (clicked.classList.contains("dropside")) {
      dropside.current.classList.toggle("aktiv")
    }
  }

  const dropsideseconde = useRef()
  const opendropsidesecond = (e) => {
    const clicked = e.target
    console.log(clicked)
    if (clicked.classList.contains("dropright")) {
      dropsideseconde.current.classList.toggle("aktiv")
    }
  }

  const dropsid= useRef()
  const opendropsid = (e) => {
    const clicked = e.target
    console.log(clicked)
    if (clicked.classList.contains("dropsid")) {
      dropsid.current.classList.toggle("aktiv")
    }
  }

  const dropsidesecond = useRef()
  const opendropsidesecon= (e) => {
    const clicked = e.target
    console.log(clicked)
    if (clicked.classList.contains("dropright")) {
      dropsidesecond.current.classList.toggle("aktiv")
    }
  }

  //Open bar
  const menu = useRef()
  const openbar = (e) => {
    const clicked = e.target
    if (clicked.classList.contains("bars")) {
      menu.current.classList.add("height")
    
    }
   
}

  const closebar=(e)=>{
    const clicked=e.target
    if(clicked.classList.contains("cross")){
      menu.current.classList.remove("height")

    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg head" id="footer">
        <div className="container-fluid" id="home">   
          <Link className="navbar-brand "><img className='logo' src={logo} alt="" /></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page"  to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-4 me-4" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-2" to="/helpcenter">Help Center</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link me-2"  to="/sign">Sign In Page</Link>
              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item">
                <Link className="nav-link a" to="#">Page <IoMdArrowDropdown className='drop' onClick={opendropdown} /></Link>
                <div className="dropdown" ref={dropdown}>
                  <Link className="pt-2 pb-2 ps-2" to="#">Service</Link>
                  <Link className='pt-2 pb-2 ps-2' to="">Team</Link>
                  <Link className='pt-2 pb-2 ps-2' to="">Become Partner</Link>
                  <Link className=" ps-2 pt-2 pb-2" to="*">Error 404</Link>
                  <Link className='pb-2 pt-2 ps-2 ' to="#">City Restaurant Hub <IoMdArrowDropright className='dropsid' onClick={opendropsid} /></Link>
                  <Link className='pb-2 pt-2 ps-2' to="#">Blog <IoMdArrowDropright className='dropright' onClick={opendropsidesecon} /></Link>
                </div>
                <div className="dropside">
                  <Link className='pt-2 pb-2 ps-2 resturant ' ref={dropsid} to="">Single Restaurant</Link>
                  <Link className='pt-2 pb-2 ps-2' to="" ref={dropsidesecond}>Single Post</Link>

                </div>

              </li>
            </ul>

          </div>
          <div className="buttons">
            <button className='barsbutton' >
              <FaBars className='bars'  onClick={openbar} />
            </button>
            <button className='button'>Login</button>
          </div>
        </div>
      </nav>
      <div className="menu" ref={menu}>
        <RxCross1 className='cross' onClick={closebar}/>
          <Link className=" mt-5 pt-2 pb-2 ps-2"to="/">Home</Link>
          <Link className=" pt-2 pb-2 ps-2" to="/about-us">About Us</Link>
          <Link className=" pt-2 pb-2 ps-2 w-100" to="/helpcenter">Help center</Link>
          <Link className='pt-2 pb-2 ps-2 w-100' to="/sign">Sign In Page</Link>
          <Link className=" pt-2 pb-2 ps-2 w-100" to="#">Page <IoMdArrowDropdown className='drop' onClick={opendropdowne} /></Link>
          <div className="dropdowne" ref={dropdowne}>
          <Link className=" pt-2 pb-2 ps-2" to="">Service</Link>
          <Link className='pt-2 pb-2 ps-2' to="">Team</Link>
                  <Link className='pt-2 pb-2 ps-2' to="">Become Partner</Link>
                  <Link className='pb-2 pt-2 ps-2 w-100' to="/error">Error 404</Link>
                  <Link className='  pb-2 pt-2 ps-2 city' to="#">City Restaurant Hub <IoMdArrowDropright className='dropside' onClick={opendropside} /></Link>
                  <Link className='blog pb-2 pt-2 ps-2' to="#">Blog <IoMdArrowDropright className='dropright' onClick={opendropsidesecond} /></Link>
                  
                </div>
                <div className="dropsidee" >
                  <Link className='pt-2 pb-2 ps-2 cafe ' ref={dropside} to="">Single Restaurant</Link>
                  <Link className='pt-2 pb-2 ps-2 post ' to="" ref={dropsideseconde}>Single Post</Link>
 
                </div>
        </div>

    </>
  )
}

export default Navbar