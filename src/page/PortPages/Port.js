import React, { useState } from 'react'


//1. 등록add list 추가 
//2. 수정edit list 수정
//3. 삭제delete list 삭제 
//4. 완료complete list 완료

const Port = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]); 
  const handleTodo = (e) => {
    setTodo(e.target.value);
  }

  const handleAdd = () => {
    setTodos(prev => {
      return[...prev, todo];
    })
    setTodo("");
  }

  const handleDelete = (index) => {
    setTodos((prev)=>{
      return prev.filter((prev, ind) => ind !== index);
    })
  }

  // 현재 날짜 구하기
  const todayTime = () => {
    let now = new Date(); //현재 날짜 및 시간
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() +1;
    let todayDate = now.getDate();
    const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
    let dayWeek = week[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    return todayYear + '년' + todayMonth + '월' + todayDate + '일' + dayWeek  + hours + ':' + minutes ;
  }

  return (
    <div className='port-t card-1'>
        <h1>To-do list</h1>
        <div className='todo_day'>
          <span>
            {todayTime().slice(0,10)}
          </span>
          <span>
            {todayTime().slice(10,13)}
          </span>
          <span>
            {todayTime().slice(13,19)}
          </span>
        </div>
        <div className='todo-i'>
          <input value={todo} onChange={handleTodo} placeholder='to-do list 입력해주세요'></input>
          <button onClick={handleAdd}>추가</button>
        </div>

        <div>{todos.length > 0 ? (
          todos.map((todo, index) => <div>{todo}<button onClick={() => handleDelete(index) }>삭제</button></div>)
        ) : ( <div>할 일이 없습니다</div> )}
        </div>
    </div>
  )
}

export default Port
