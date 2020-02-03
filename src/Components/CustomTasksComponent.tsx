import React from 'react'
import { FC } from 'react'
import { Task, Roles } from '../task'

import TaskButtonsComponent from './TaskButtons'
import { TaskButtons } from '../taskButtons'
import { CustomTasks } from '../customTasks'

const taskButtonsData: TaskButtons[] = [
  {
    label: 'Button1',
    handler: () => console.log('Hello World'),
    roles: ['user'],
    color: 'primary'
  }
]

function renderCustomTasksList(customTasks: CustomTasks[], currentRole: Roles) {
  return customTasks.map((customTasks: CustomTasks) => {
    const { url, label, roles, completed } = customTasks

    if (!roles.includes(currentRole)) return

    return (
      <div className='custom-task-comp-style'>
        <header className='custom-task-header'>Custom Tasks List</header>
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
        <button className={'create-new-task'}>
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
