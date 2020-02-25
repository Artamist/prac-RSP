import React from 'react'
import { FC } from 'react'
import { Task, Roles } from '../task'

import TaskButtonsComponent from './TaskButtons'
import { TaskButtons } from '../taskButtons'

import { v4 } from 'uuid'

const taskButtonsData: TaskButtons[] = [
  {
    label: 'View',
    handler: () => console.log('Hello World'),
    roles: ['user'],
    color: 'primary',
    completed: true
  }
]

function renderTaskList(task: Task[], currentRole: Roles) {
  return task.map((task: Task) => {
    const { url, label, roles, checked } = task

    if (!roles.includes(currentRole)) return

    return (
      <div key={v4()} className='task-comp-style'>
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
          <hr className='line-style'></hr>
        </div>
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
          <hr className='line-style'></hr>
        </div>
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

// add onClick to delete and edit buttons
