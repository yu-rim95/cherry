import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  
  return (
    <div style={{color:"#fff"}}>
        <div>
            <div>
                <Form.Control type="text" placecholder="이름을 입력해주세요"/> 
            </div>
            <button>찾기</button>
        </div>
    </div>
  )
}

export default SearchBox
