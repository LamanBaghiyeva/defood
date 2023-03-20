import React from 'react'
import HelpcenterNavbar from '../components/Help-center/HelpcenterNavbar'
import Videotutorial from '../components/Help-center/Videotutorial'
import Form from '../components/Help-center/Form'
import Map from "../components/Help-center/Map"
const Home = () => {
  return (
    <div>
      <HelpcenterNavbar/>
      <Videotutorial/>
      <Form/>
      <Map />

    </div>
  )
}

export default Home