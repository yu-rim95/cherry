import React from 'react'
import Box from '../../component/Box'
import { useReducer, useState } from 'react';

//1. 박스2개 (타이틀,사진,결과값)
//2. 버튼3개 가위,보,바위
//3. 버튼클릭시 클릭한 값이 박스에 보여지기 
//4. 컴퓨터는 랜덤하게 아이템 선택
//5. 3번4번의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 이기면 초록 , 치면 빨강색 , 비기면 검정색 승패결과에따라 박스색 변경
const choice = {
  rock:{
    name:"Rock",
    img:" https://thumb.photo-ac.com/47/473ef77f5797ec0fd8619c5236c85fba_t.jpeg"
  },
  scissors:{
    name:"Scissors",
    img:"https://mblogthumb-phinf.pstatic.net/20151004_78/shdudtn1234_1443897618525T4jeq_JPEG/%B0%A1%C0%A7%B9%D9%C0%A7%BA%B8_%C0%CC%B1%E2%B4%C2%B9%FD%B0%FA_%C0%DF%C7%CF%B4%C2%B9%FD_%BD%C5%C0%C7_%C7%D1%BC%F6%B8%A6_%B9%E8%BF%F6%BA%B8%C0%DA.jpg?type=w2"
  },
  paper:{
    name:"Paper",
    img:"https://cdn.crowdpic.net/detail-thumb/thumb_d_BD030450290C2E8F769E16352FDFF090.jpg"
  }
}
const Port02 = () => {
   //state 만듬
   const [userSelect,serUserSelect] = useState(null)
   const [computerSelest,setComputerSelect] = useState(null)
   const [result,setResult] = useState("") //비어이는 스프링타입
 
   const play=(userChoice)=>{
     serUserSelect(choice[userChoice]); //내가선택한값
     let computerChoice = randomChoice(); //컴퓨터가 선택한 값 
     setComputerSelect(computerChoice);
 
     setResult(judgement(choice[userChoice],computerChoice));
   };

   const judgement = (user,computer)=>{
    console.log("user",user,"computer",computer);

    //승리: 가위(보자기)바위(가위)보자기(바위)
    //패배: 가위(바위)바위(보자기)보자기(가위)
    //비김: 가위(가위)바위(바위)보자기(보자기)  
    // if(user.name == computer.name){
    //   return "tie"
    // }else if(user.name == "Rock"){
    //   if(computer.name == "Scissors"){
    //     return "win"
    //   }else {
    //     return "lose"
    //   } 
    // }

    if(user.name == computer.name){
      return "tie"
    }else if(user.name == "Rock")
        return computer.name == "Scissors" ? "win" : "lose";
    else if(user.name == "Scissors")
        return computer.name == "Paper" ? "win" : "lose";
    else if(user.name == "Paper")
        return computer.name == "Rock" ? "win" : "lose";
  };

const randomChoice=()=>{
  let itemArray = Object.keys(choice);//객체에 키값만 뽑아서 배열로 만들어주는 함수 
  console.log("item arry",itemArray)
  let randomItem = Math.floor(Math.random()*itemArray.length);
  let final = itemArray[randomItem]
  return choice[final];
  console.log("final",final)
}

return (
  <div className='port02'>
    <div className='main'>
      <Box title="You" item={userSelect} result={result}/>
      <Box title="Computer" item={computerSelest} result={result}/>
    </div>
    <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
  </div>

);
}


export default Port02
