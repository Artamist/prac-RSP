/** @jsx createElement */

import { createElement, FC } from 'react'
import { TaskButtons, Roles } from '../taskButtons'

// const checkmark = require('./Images/checkmark.svg'');

function renderTaskButtonsList(taskButtons: TaskButtons[], currentRole: Roles) {
  return taskButtons.map((taskButtons: TaskButtons) => {
    const { url, roles, handler, label, color } = taskButtons

    if (!roles.includes(currentRole)) return

    return (
      /*<button onClick={handler} className={`button micro small ${color}`}>
        {label}
      </button> */
      <div className='task-icons'>
        <button onClick={handler} className={`view-task ${color}`}>
          <label className={`view-task-label ${color}`}>
            <a href='https://www.google.com/'>View {/*label*/}</a>
          </label>
        </button>
        <button onClick={handler} className={`edit-task ${color}`}>
          <label className='edit-task-label'>Edit {/*label*/}</label>
        </button>
        <button onClick={handler} className={`delete-task ${color}`}>
          <label className='delete-task-label'>Delete {/*label*/}</label>
        </button>
        <button onClick={handler} className={`complete-task ${color}`}>
          <label className='complete-task-label'>
            {/* checkmark */}
            {/*label*/}
          </label>
        </button>
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
