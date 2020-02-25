/** @jsx createElement */
import { createElement, FC } from 'react'
import { TaskButtons, Roles } from '../taskButtons'

import { v4 } from 'uuid'

import checkmark from '../Images/checkmark.svg'

//Outputs something to show it works, need to be updated using routes
const viewButtonClickHandler = () => console.log('view button clicked')

function renderTaskButtonsList(taskButtons: TaskButtons[], currentRole: Roles) {
  return taskButtons.map((taskButtons: TaskButtons) => {
    const { url, roles, handler, label, color, completed } = taskButtons

    if (!roles.includes(currentRole)) return

    return (
      <div key={v4()} className='task-icons-wrapper'>
        <div className='task-icons'>
          <button
            onClick={viewButtonClickHandler}
            className={`view-task ${color}`}
          >
            <span className={`view-task-label ${color}`}>
              <a href='https://www.google.com/'>{label}</a>
            </span>
          </button>
          <button onClick={handler} className={`edit-task ${color}`}>
            <span className='edit-task-label'>Edit {/*label*/}</span>
          </button>
          <button onClick={handler} className={`delete-task ${color}`}>
            <span className='delete-task-label'>Delete {/*label*/}</span>
          </button>
          {completed && (
            <button className={`complete-task ${color}`}>
              <img src={checkmark} className='complete-task-image' />
            </button>
          )}
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
    <div className='task-button-set task-button-style'>
      {renderTaskButtonsList(taskButtonsData, role)}
    </div>
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
