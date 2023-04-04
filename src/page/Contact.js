import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="cont-me">
      <div className='git_t'>
      <p>
       Github link:
      </p>
      <Link to="https://github.com/yu-rim95">Github</Link>
      </div>
      <div className='git_t'>
        <p>notion link:</p>
        <Link to="https://twilight-ermine-35c.notion.site/Yuurim-288f62a10f7f4d0e8db6569b9096952c">notion</Link>
      </div>
      <div className='git_t'>
        <p>Phone Number:</p>
        <Link to="#">010 9764 2205</Link>
      </div>
      <div className='git_t'>
        <p>Emali:</p>
        <Link to="https://www.naver.com/">csm2205@naver.com</Link>
      </div>
    </div>
  )
}

export default Contact
