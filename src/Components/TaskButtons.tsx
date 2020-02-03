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
              {/* checkmark */}
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
