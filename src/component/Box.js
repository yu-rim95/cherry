import React from 'react'

const Box = (props) => {
  let result;
  if(
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== "" ){
      //카드가 컴퓨터 카드인가 ? && 결과가 비긴건가 아닌가? && 값이 있는가?
      result = props.result === "win" ? "lese" : "win";
    }else {//위의 경우가 아니라면 props.result로 전달된 결과 를그대로 쓴다.
      result = props.result;
    }
  return (
    <div className={`box ${result}`}>
       <h1>{props.title}</h1>
       {/* <h2>{props.item && props.item.name}</h2> */}
       <img className='item-img' src={props.item && props.item.img}/>
       <h2>{result}</h2>
    </div>
  );
}

export default Box
