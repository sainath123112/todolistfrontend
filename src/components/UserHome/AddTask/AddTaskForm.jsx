import React, { useContext } from 'react'
import "./AddTaskForm.css"
import { containerProvider } from '../../../contextcontainer/ContextContainer'
import { useForm } from 'react-hook-form'
function AddTaskForm({setAddTaskForm}) {
  const { taskarray, setTaskarray } = useContext(containerProvider)
  const { register, handleSubmit} = useForm()
  
  function onSubmit(data)
  {
    setTaskarray([...taskarray, data])
    setAddTaskForm(false)
  }

  return (
    <div className="z-50 fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center">
        <div onClick={()=> setAddTaskForm(false) } className='z-30 fixed w-[100vw] h-[100vh] bg-black opacity-70 top-0 left-0'>

        </div>
        <div className="z-50">
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-white z-50 rounded-md shadow-md items-center pb-[20px] w-[400px]'>
            <h1 onClick={()=> setAddTaskForm(false) } className='text-[24px] self-start ml-[20px] mt-[10px] font-bold cursor-pointer opacity-70 hover:opacity-50'>X</h1>
            <h1 className='text-[32px] mb-[5px] tracking-wider font-bold'>Add Task</h1>
            <div className='flex flex-col mb-[5px]'>
            <label>Task Title:</label>
            <input type='text' {...register("title")} placeholder='e.g: Complete Laundry' className='text-[16px] tracking-wider px-[12px] rounded-md py-[6px] w-[300px]  bg-[#CAF0F8]'></input>
            </div>
            <div className='flex flex-col mb-[5px]'>
            <label>Description:</label>
            <textarea {...register("description")} placeholder='e.g: Only wash tracks and tshirts.' className='text-[16px] tracking-wider px-[12px] rounded-md py-[6px] w-[300px]  bg-[#CAF0F8]'></textarea>
            </div>
            <div className='flex flex-col mb-[5px]'>
            <label>Due By:</label>
            <input type='date' {...register("due_date")} placeholder='Due By' className='text-[16px] tracking-wider px-[12px] rounded-md py-[6px] w-[300px]  bg-[#CAF0F8]'></input>
            </div>
            <div className='flex flex-col mb-[5px]'>
            <label>Priority:</label>
            <div className='priority-select'>
            <select {...register("priority")} className='appearance-none text-[16px] tracking-wider px-[12px] rounded-md py-[6px] w-[300px]  bg-[#CAF0F8]'>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            </div>
            </div>
            <div className='flex flex-col'>
            <label>Type of task:</label>
            <div className='typeoftask-select'>
            <select {...register("type_of_task")} className=' appearance-none text-[16px] tracking-wider px-[12px] rounded-md py-[6px] w-[300px]  bg-[#CAF0F8]'>
              <option>Home</option>
              <option>Work</option>
              <option>Personal</option>
              <option>Other</option>
            </select>
            </div>
            </div>
            <input type='submit' className='bg-[#0096C7] text-[18px] text-white px-[16px] cursor-pointer py-[4px] rounded-md my-[20px]' value="Add Task"></input>
        </form>
        </div>
    </div>
  )
}

export default AddTaskForm