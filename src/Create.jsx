import React, { useState } from 'react'
import axios from 'axios';

function Create() {
  const [task , setTask] = useState();

  function add () {
    axios.post('http://localhost:3000/add', {task : task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className='create-form'>
        <input type="text" placeholder='Enter a task' onChange={(e) => setTask(e.target.value)}/>
        <button type="button" onClick={add}>Add</button>
    </div>
  )
}

export default Create
