import React from 'react'
import { FC } from 'react'
import { Task, Roles } from '../task'

import TaskButtonsComponent from './TaskButtons'
import { TaskButtons } from '../taskButtons'
import { CustomTasks } from '../customTasks'
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

function renderCustomTasksList(customTasks: CustomTasks[], currentRole: Roles) {
  return customTasks.map((customTasks: CustomTasks) => {
    const { url, label, roles, checked } = customTasks

    if (!roles.includes(currentRole)) return

    return (
      <div key={v4()} className='custom-task-comp-style'>
        <div className='custom-task-list-style'>
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
        <button className={'create-new-task-button'}>
          <span className='create-new-task-label'>Create New Task</span>
        </button>
      </div>
    )
  })
}

interface Props {
  customTasksData: CustomTasks[]
  role: Roles
}

const CustomTasksComponent: FC<Props> = ({ customTasksData, role }) => {
  return (
    <div className='tasklist'>
      {renderCustomTasksList(customTasksData, role)}
    </div>
  )
}

export default CustomTasksComponent

// add onClick to all buttons
