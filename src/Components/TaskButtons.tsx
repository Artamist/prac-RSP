/** @jsx createElement */
import { createElement, FC, useState } from 'react'
import { TaskButtons, Roles } from '../taskButtons'

import checkmark from '../Images/checkmark.svg'

function renderTaskButtonsList(taskButtons: TaskButtons[], currentRole: Roles) {
  return taskButtons.map((taskButtons: TaskButtons) => {
    const { url, roles, handler, label, color } = taskButtons
    /*
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
    if (!roles.includes(currentRole)) return

    return (
      /*
<div>
  <form className='' onSubmit={handleSubmit}>
    <input type='text' id='taskValue' onChange={handleChange}/>
    <button type='submit'>Add Task</button>
  </form>
</div>
*/

      <div className='task-icons-wrapper'>
        <div className='task-icons'>
          <button onClick={handler} className={`view-task ${color}`}>
            <span className={`view-task-label ${color}`}>
              <a href='https://www.google.com/'>View {/*label*/}</a>
            </span>
          </button>
          <button onClick={handler} className={`edit-task ${color}`}>
            <span className='edit-task-label'>Edit {/*label*/}</span>
          </button>
          <button onClick={handler} className={`delete-task ${color}`}>
            <span className='delete-task-label'>Delete {/*label*/}</span>
          </button>
          <button onClick={handler} className={`complete-task ${color}`}>
            <span className='complete-task-label'>
              <img src={checkmark} alt='checkmark-icon'></img>
              {/*label*/}
            </span>
          </button>
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
