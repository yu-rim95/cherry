import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Port03 = () => {
    const count = useSelector(state=>state.count)
    // const [count,setCount] = useState(0);
    const dispatch = useDispatch()

    const increase = () => {
        dispatch({type:"INCREASE"})
        // setCount(count+1);
    };
    
  return (
    <div style={{color:'#fff'}}>
       <h1>{count}</h1>
       <button onClick={increase}>증가</button>
    </div>
  )
}

export default Port03
