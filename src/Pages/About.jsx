import React from 'react'
import Aboutnav from '../components/About/Aboutnav'
import Sectionabout from "../components/About/Sectionabout"
import Time from "../components/About/Time"
import Achivement from "../components/About/Achivement"
import Paket from "../components/About/Paket"
import Partnership from "../components/About/Partnership"
import Aboutfooter from "../components/About/Aboutfooter"
const About = () => {
  return (
    <>
    <Aboutnav/>
    <Sectionabout />
    <Time />
    <Achivement />
    <Paket />
    <Partnership />
    <Aboutfooter />
    </>
  )
}

export default About