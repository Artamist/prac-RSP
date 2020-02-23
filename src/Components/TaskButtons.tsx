/** @jsx createElement */
import { createElement, FC, useState } from 'react'
import { TaskButtons, Roles } from '../taskButtons'

import checkmark from '../Images/checkmark.svg'
import { v4 } from 'uuid'

function renderTaskButtonsList(taskButtons: TaskButtons[], currentRole: Roles) {
  return taskButtons.map((taskButtons: TaskButtons) => {
    const { id, url, roles, handler, label, color } = taskButtons

    if (!roles.includes(currentRole)) return

    return (
      <div className='task-icons-wrapper'>
        <div className='task-icons'>
          <button onClick={handler} id={id} className={`view-task ${color}`}>
            <span className={`view-task-label ${color}`}>
              <a href='https://www.google.com/'>{label}</a>
            </span>
          </button>
          <button onClick={handler} id={v4()} className={`edit-task ${color}`}>
            <span className='edit-task-label'>Edit {/*label*/}</span>
          </button>
          <button
            onClick={handler}
            id={v4()}
            className={`delete-task ${color}`}
          >
            <span className='delete-task-label'>Delete {/*label*/}</span>
          </button>
          <div>
            <input
              type='checkbox'
              className='hidden'
              id='delete-button'
              name='cb'
            ></input>
            <label id={id}>text</label>
          </div>
        </div>
      </div>
    )
  })
}

interface Props {
  taskButtonsData: TaskButtons[]
  role: Roles
}

const TaskButtonsComponent: FC<Props> = ({ taskButtonsData, role }) => {
  return (
    <button className='task-button-set task-button-style'>
      {renderTaskButtonsList(taskButtonsData, role)}
    </button>
  )
}

export default TaskButtonsComponent

/* Notes for state and handlers


const [taskValue, setTaskValue] = useState('')
const [task, setTask] = useState([])


const handleDelete = e => {
  const { id } = e.target.parentElement
  task.splice(id, 1)
  setTask([...task])
}
const handleSubmit = (e: null) => {
  e.preventDefault()
  const task = {
    value: taskValue,
    complete: false
  }
  if (!taskValue) return
  setTask([...tasks, task])
  document.getElementById('taskValue').value = ''
}

const handleChange = (e) => {
setTaskValue(e.target.value);
}
*/
/*
<div>
<form className='' onSubmit={handleSubmit}>
<input type='text' id='taskValue' onChange={handleChange}/>
<button type='submit'>Add Task</button>
</form>
</div>
*/
/* 
export function TasksComponent(props) {
  const listTasks = myTasks.map((tasks) =>
    <li key={tasks.id}>
      {tasks.value}
    </li>
  );
  return (
    <ul>{listTasks}</ul>
  );
}
const myTasks = [{ id: 'v4()', value: label },
{ id: 'b', value: 'orange' },
{ id: 'c', value: 'strawberry' },
{ id: 'd', value: 'blueberry' },
{ id: 'e', value: 'avocado' }];
  <TasksComponent myList={myTasks} />
*/
