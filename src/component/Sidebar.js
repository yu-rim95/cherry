import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
    // // 특정 페이지에 사이드 바 숨기기 
    // const location = useLocation();
    
    // if (location.pathname === "/Portfolio/Port") return null;
  return (
    <div className='sidebar'>
        <NavLink to='/Portfolio/Port' className="btn">
                <p>to-do list</p>
        </NavLink>
        <NavLink to='/Portfolio/Port02'className="btn">
                <p>Rock Paper Scissors</p>
        </NavLink>
        <NavLink to='/Portfolio/Port03' className="btn">
                <p>Port03</p>
        </NavLink>
        <NavLink to='/Portfolio/Port04'className="btn">
                <p>Port04</p>
        </NavLink>
    </div>
  )
}

export default Sidebar
