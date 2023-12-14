import React, { useContext, useState } from 'react'
import AddTaskForm from './AddTaskForm'
import { containerProvider } from '../../../contextcontainer/ContextContainer'

function AddTask() {
  
    const [ showAddTaskForm, setAddTaskForm] = useState(false)
    function handleAddTask()
    {
        setAddTaskForm(true)
    }
  return (
    <div className=''>
      
    {showAddTaskForm && <AddTaskForm setAddTaskForm = {setAddTaskForm}></AddTaskForm>}
    <div onClick={handleAddTask} className='w-[230px] h-[230px] cursor-pointer bg-white shadow-md rounded-md flex justify-center items-center hover:opacity-60 opacity-70'><i className="fa-solid fa-plus text-[102px] font-[100] text-gray-500"></i></div>
    </div>
  )
}

export default AddTask