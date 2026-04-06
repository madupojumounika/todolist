import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(function (){
        axios.get('http://localhost:3000/get')
        .then(result => {
            setTodos(result.data)
        })
        .catch(err => console.log(err))
    }, []) 

    const edit = (id) => {
        axios.put('http://localhost:3000/update/' +id)
        .then(result => {
            location.reload();
        })
        .catch(err => console.log(err))
    }

    const deletee = (id) => {
        axios.delete('http://localhost:3000/delete/' +id)
        .then(result => {
            location.reload();
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create/>
        {   todos.length === 0
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo => (
                <div className='task'>
                    <div className='checkbox' onClick={() => edit(todo._id)}>
                        {todo.done ?
                            <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                        :
                        <BsCircleFill className='icon'/>
                        }

                        <p className={todo.done ? "line-through" : ""}>{todo.task}</p>
                    </div>
                    <div>
                        <span><BsFillTrashFill className='icon ' onClick={() => deletee(todo._id)}/> </span>
                    </div>
                </div>
            ))

        }
    </div>


  )
}

export default Home