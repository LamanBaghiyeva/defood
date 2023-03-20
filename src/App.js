import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Firstpage from "./Pages/Firstpage"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Footerfirst from "./components/Footerfirst"
import Helpcenter from "./Pages/HelpCenter"
import Error from "./Pages/Error"
import About from "./Pages/About"
import Sign from "./components/Sign/Sign"
import AOS from 'aos';
function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Firstpage/> }/>
        <Route path="/helpcenter" element={<Helpcenter/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/sign" element={<Sign />}/>
      </Routes>


      <Footerfirst />

      </BrowserRouter>
    </div>
  );
}

export default App;
