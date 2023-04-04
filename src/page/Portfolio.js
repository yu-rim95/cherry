import React from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import Port from './PortPages/Port'
import {  Link } from "react-router-dom";
import Port02 from './PortPages/Port02';
import Port03 from "./PortPages/Port03";
import Port04 from './PortPages/Port04';
import Port05 from './PortPages/Port05';
import Sidebar from '../component/Sidebar';

const Portfolio = () => {
  // useNavigate라는 리액트 훅이용 
  const navigate = useNavigate();

  // 뒤로가기버튼 
  const goBack = () => {
    // 내가 가고싶은 주소 적는데 뒤로가고싶으니 -1
    navigate(-1);
  };
  return (
      <div className='port-sub'>
          {/* <button onClick={goBack}>goBack</button> */}
          <div className='port-m'>
            <Sidebar/> 
              <Routes>
                  <Route path='/Port' element={<Port/>} />
                  <Route path='/Port02' element={<Port02/>}/>
                  <Route path='/Port03' element={<Port03/>}/>
                  <Route path='/Port04' element={<Port04/>}/>
                  <Route path='/Port05' element={<Port05/>}/>
              </Routes>
          </div>
      </div>
  )
}

export default Portfolio
