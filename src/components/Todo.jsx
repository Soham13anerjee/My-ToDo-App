import { useEffect, useState } from 'react'
import './css/Todo.css'
import { useRef } from 'react'
import TodoItems from './TodoItems'


const Todo = () => {
    const [todos,setTodos] = useState([])
    const inputRef = useRef(null)

    const handleClick = ()=>{
        setTodos([...todos,inputRef.current.value]);
        inputRef.current.value = ""
    }

    useEffect(()=>{
      setTodos(JSON.parse(localStorage.getItem("todos")))
    },[])
    
    useEffect(()=>{
        setTimeout(() => {
            console.log(todos)
            localStorage.setItem("todos",JSON.stringify(todos))
        }, 100);
    },[todos])

  return (
    <div className='todo'>
      <div className="todo-header">My To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef } type="text" placeholder='Add your Task :' className='todo-input'  />
        <button className='todo-add-button' onClick={handleClick}> Add</button>
      </div>
      <div className="todo-list">
         {todos.map((todo,index)=>{
            return <TodoItems index={index} item={todo} setItems={setTodos}/>
          })}
      </div>
    </div>
  )
}

export default Todo
