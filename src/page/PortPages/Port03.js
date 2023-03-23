import React, {Component} from 'react';
import { useState } from "react";

class Port03 extends Component {
    render() {
        const [count,setCount] = useState(0);
        const increase = () => {
        };
        return (
            <div style={{color:"#fff"}}>
                <h1>0</h1>
                <button onClick={increase}>증가</button>
            </div>
        );
    }
}

export default Port03;