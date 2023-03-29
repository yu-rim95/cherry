import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './page/About';
import Home from './page/Home';
import Contact from './page/Contact';
import Portfolio from './page/Portfolio';
import Navbar from './component/Navbar';


const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route exact path='/cherry' element={<Home/>} />
            <Route exact path='/About' element={<About/>} />
            <Route exact path='/Portfolio/*' element={<Portfolio/>} ></Route>
            <Route exact path='/Contact' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router

