import React, { useState } from 'react';

// 1. 인풋박스에 텍스트 추가하면 리스트 추가
// 2. 리스트 삭제버튼 
// 3. 체크박스 체크시 취소선 생기기
// 4. 현재 날짜시간이 나오기 


const Port01 = () => {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
        if (inputValue.trim()) {
        const newTodo = {
            id: new Date().getTime(),
            text: inputValue,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setInputValue('');
        }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

  const handleCompleteTodo = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
            });
        setTodos(updatedTodos);
    };

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
    <div className='p01_todo'>
        <h1>To-Do List</h1>
        {/* 오늘 날짜 시간 */}
        <div className='todo_day'>
            <span>
                {todayTime().slice(0,9)}
            </span>
            <span>
                {todayTime().slice(9,12)}
            </span>
            <span>
                {todayTime().slice(12,19)}
            </span>
        </div>
        {/* 투드리스트 할일 업데이트 */}
        <div className="todo-input">
            <input
            type="text"
            placeholder="오늘의 할일을 적어주세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            />
            <button onClick={handleAddTodo}>추가</button>
        </div>
        {/* 리스트 목록 */}
        <ul className='todo_list'>
            {todos.map((todo) => (
            <li
                key={todo.id}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCompleteTodo(todo.id)}
                />
                <span>{todo.text}</span>
                <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
            </li>
            ))}
        </ul>

    </div>
  );
}


export default Port01
