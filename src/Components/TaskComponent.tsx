import React from 'react'
import { FC } from 'react'
import { Task, Roles } from '../task'

import TaskButtonsComponent from './TaskButtons'
import { TaskButtons } from '../taskButtons'

const taskButtonsData: TaskButtons[] = [
  {
    label: 'Button1',
    handler: () => console.log('Hello World'),
    roles: ['user'],
    color: 'primary'
  }
]

function renderTaskList(task: Task[], currentRole: Roles) {
  return task.map((task: Task) => {
    const { url, label, roles, completed } = task

    if (!roles.includes(currentRole)) return

    return (
      <div className='task-comp-style'>
        <div className='task-list-style'>
          <ul>
            <li>
              <a href={url}>{label}</a>
              <TaskButtonsComponent
                taskButtonsData={taskButtonsData}
                role={'user'}
              />
            </li>
          </ul>
        </div>
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

// add onClick to all buttons
