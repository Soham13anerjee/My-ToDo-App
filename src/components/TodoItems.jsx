import './css/TodoItem.css'
import tick from './assets/check_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import noTick from './assets/circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import cross from './assets/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import { useEffect, useEffectEvent, useState } from 'react'

const TodoItems = ({index,item,setItems}) => {
  const [toggle,setToggle] = useState(true)

  const handleToggle = ()=>{
    setToggle(!toggle)
  }

  const handleDelete = (index) => {
    const items = JSON.parse(localStorage.getItem("todos"))
    const data = items.filter((item,idx) => index !== idx)
    setItems(data)
  }

  // useEffect(()=>{
  //   setToggle(JSON.parse(localStorage.getItem("toggle")))
  // },[])

  // useEffect(()=>{
  //   setTimeout(() => {
  //     localStorage.setItem("toggle",JSON.stringify(toggle))
  //   }, 100);
  // },[toggle])

  return (
    <div className='todoitems'>
      <div className="todoitems-container">
        <div onClick={handleToggle} className='toggle'>
          {toggle?<img src={noTick} alt="" />: <img src={tick} alt="" />}
        </div>
        <div className={`todoitems-text ${!toggle && 'line-through'}`}>{item}</div>
      </div>
        <img onClick={()=>{handleDelete(index)}} src={cross} className='todoitems-crossIcon' alt="" />
    </div>
  )
}

export default TodoItems
