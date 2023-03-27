import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useSelector , useDispatch } from 'react-redux';

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <Form className='ph-search' onSubmit={searchByName}>
        <div>
            <p>연락처 찾기</p>
            <div>
                <Form.Control type="text" placecholder="name" onChange={(event) => setKeyword(event.target.value)}/> 
            </div>
            <button type='submit'>찾기</button>
        </div>
    </Form>
  )
}

export default SearchBox
