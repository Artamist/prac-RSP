import React from 'react'
import { FC } from 'react'
import { Task, Roles } from './task'

function renderTaskList(task: Task[], currentRole: Roles) {
  return task.map((task: Task) => {
    const { url, label, roles } = task

    if (roles.includes((currentRole = 'user'))) return

    return (
      <div>
        <ul>
          <li>
            <a href={url}>{label}</a>
          </li>
          <li>
            <a href={url}>{label}</a>
          </li>
          <li>
            <a href={url}>{label}</a>
          </li>
        </ul>
        <button className='delete-task'>
          <label className='delete-task-label'>delete</label>
        </button>
      </div>
    )
  })
}

interface Props {
  taskData: Task[]
  role: Roles
}

const TaskComponent: FC<Props> = ({ taskData, role }) => {
  return <div className='tasklist'>{renderTaskList(taskData, role)}</div>
}

export default TaskComponent
