import React, { useContext, useEffect } from 'react'
import AddTask from './AddTask/AddTask'
import { containerProvider } from '../../contextcontainer/ContextContainer'

function UserHome() {
    const {setPath, taskarray} = useContext(containerProvider)
    useEffect(()=>{
        setPath(window.location.pathname)
    },[])
  return (
    <div className=' flex flex-row flex-wrap gap-[25px] pt-[120px] px-[50px] w-[100vw] h-[100vh]'>
      {taskarray.map((task, indx)=>{
        return (<div key={indx} className=' leading-4 w-[230px] p-[20px] h-[230px] cursor-pointer bg-white shadow-md rounded-md flex flex-col justify-center items-center'>
                  <h1 className='mb-[10px] text-[28px] tracking-wider'>{task.title}</h1>
                  <p className='opacity-50 italic mb-[5px] text-justify'>{task.description}</p>
                  <div className='p-[10px]'>
                  <h1 className={`mb-[10px]`}>Due by: {task.due_date}</h1>
                  <h1 className='mb-[10px]'>Priority: <span className={`my-[5px] text-white px-[5px] rounded-sm py-[1px] ${task.priority === "High" ? "bg-red-500 " : task.priority==="Medium"? "bg-blue-500" : "bg-green-500"}`}>{task.priority}</span></h1>
                  <h1 className='mb-[5px]'>Type of task: {task.type_of_task}</h1>
                  </div>
                  <div className='flex justify-center items-center gap-[10px]'>
                    <a className='px-[10px] py-[5px] bg-red-500 text-white rounded-md cursor-pointer'>Delete</a>
                    <a className='px-[10px] py-[5px] bg-blue-500 text-white rounded-md cursor-pointer'>Update</a>
                    <a className='px-[10px] py-[5px] bg-green-500 text-white rounded-md cursor-pointer'>Done</a>
                  </div>
           </div>)
      })}
        <AddTask></AddTask>
    </div>
  )
}

export default UserHome