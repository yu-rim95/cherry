import React from 'react'
import { Container } from 'react-bootstrap'
import Contactfomt from '../../component/Contactfomt'
import ContactList from '../../component/ContactList'

// 1. 왼쪽에는 연락처 등록 폼 / 오른쪽에는 연락처 리스트와 검색창 
// 2. 리스트에 유저 이름과 전화번호를 추가할수 있다 
// 3. 리스트에 아이템이 몇개 있는지 
// 4. 사용자가 유저를 이름 검색으로 찾을 수 있다 

const Port03 = () => {
  return (
    <div style={{color:""}}>
      <h1>연락터</h1>
      <Container>
        <div>
           <div><Contactfomt/></div>
           <div><ContactList/></div>
        </div>
      </Container>
    </div>
  )
}

export default Port03
