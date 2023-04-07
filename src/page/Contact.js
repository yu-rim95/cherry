import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="cont-me">
      <div className='git_t'>
      <p>
       Github link:
      </p>
      <a href="https://github.com/yu-rim95" target={"_blank"}>[Github Link]</a>
      </div>
      <div className='git_t'>
        <p>포트폴리오 기획서:</p>
      <a href="https://twilight-ermine-35c.notion.site/01-React-915e2c447b0047b0886b0073af9118ad" target={"_blank"}>[project Link]</a>
      </div>
      <div className='git_t'>
        <p>Phone Number:</p>
        <Link to="#">010 9764 2205</Link>
      </div>
      <div className='git_t'>
        <p>Emali:</p>
        <Link to="#">csm2205@naver.com</Link>
      </div>
    </div>
  )
}

export default Contact
