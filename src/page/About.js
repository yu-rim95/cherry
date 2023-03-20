import React from 'react'
import yurim from '../yurim.png'

const About = () => {
  return (
    <div className='about_main'>
        <div>
             <div className="y_txt">
                <p className='txt_typing'>텍스트 타이핑</p>
                <p className='txt_fadein'>
                    새로운 기술을 활용해 비즈니스 문제를 해결하고 
                    <br></br>FO 신규 페이지 퍼블과 프론트 개발 에 관심이 많아 프론트 개발로 지원하게 된 최유림입니다.
                    <br></br>이력서에 보시면 저는 비전공자라서 이부분이 단점보다는 장점이라고 생각합니다, 
                    <br></br>그이유는 남이 한걸음씩 갈때마다 저는 두세걸음 더 움직여야 된다고 생각해서항상 끊임없이 성장중에 있습니다.
                </p>
             </div>
            <img className='y_img' src={yurim} ></img>
        </div>
    </div>
  )
}



export default About
