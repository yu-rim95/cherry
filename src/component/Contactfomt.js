import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';



const Contactfomt = () => {
  const [name,setName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState(0);
  // const getName = (event) => {
  //   // event.target.value
  //   setName(event.target.value);
  // }
  const dispatch = useDispatch();
  
  const addContact = (event) => {
    event.preventDefault();
    dispatch({type: "ADD_CONTACT", payload:{name,phoneNumber}})
  }

  return (
    <div style={{color:"#fff"}}>
      <Form onSubmit={addContact}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event)=>setName(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(event)=>setPhoneNumber(event.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                추가
            </Button>
      </Form>
    </div>
  )
}

export default Contactfomt

