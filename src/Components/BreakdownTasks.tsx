import React from 'react'
import { FC } from 'react'

import { v4 } from 'uuid'

import '../style/progress.scss'

import ProgressButtonsComponent from './ProgressButtons'
import { ProgressButtons } from '../progressButtons'

import { BreakdownTasks, Roles } from '../breakdownTasks'

import TaskButtonsComponent from './TaskButtons'
import { TaskButtons } from '../taskButtons'

import PieChart from './PieChart'

const progressButtonsData: ProgressButtons[] = [
  {
    label: 'Video',
    handler: () => console.log('Hello World'),
    roles: ['user', 'admin', 'teacher'],
    color: 'green'
  }
]
const taskButtonsData: TaskButtons[] = [
  {
    url: 'www.google.com',
    label: 'View',
    handler: () => console.log('Hello World'),
    roles: ['admin'],
    color: 'primary',
    completed: true
  }
]

function renderBreakdownTasksSection(
  breakdownTasks: BreakdownTasks[],
  currentRole: Roles
) {
  return breakdownTasks.map((breakdownTasks: BreakdownTasks) => {
    const { label, roles, completed } = breakdownTasks

    if (!roles.includes(currentRole)) return

    return (
      <div key={v4()} className='breakdown-style'>
        <div className='progress-pie-style'>
          <PieChart />
        </div>
        <div className='breakdown-tasks-box'>
          <header className='breakdown-tasks-header'>
            {/* Insert percentage props*/}Breakdown Tasks
            <hr className='line-header-style'></hr>
          </header>
          <div className='breakdown-button-style'>
            <ProgressButtonsComponent
              progressButtonsData={progressButtonsData}
              role={'admin'}
            />
            <TaskButtonsComponent
              taskButtonsData={taskButtonsData}
              role={'admin'}
            />
          </div>
          <hr className='line-style'></hr>
          <div className='breakdown-button-style'>
            <ProgressButtonsComponent
              progressButtonsData={progressButtonsData}
              role={'admin'}
            />
            <TaskButtonsComponent
              taskButtonsData={taskButtonsData}
              role={'admin'}
            />
          </div>
          <hr className='line-style'></hr>
          <div className='breakdown-button-style'>
            <ProgressButtonsComponent
              progressButtonsData={progressButtonsData}
              role={'admin'}
            />
            <TaskButtonsComponent
              taskButtonsData={taskButtonsData}
              role={'admin'}
            />
          </div>
          <hr className='line-style'></hr>
          <div className='breakdown-button-style'>
            <ProgressButtonsComponent
              progressButtonsData={progressButtonsData}
              role={'admin'}
            />
            <TaskButtonsComponent
              taskButtonsData={taskButtonsData}
              role={'admin'}
            />
          </div>
          <hr className='line-style'></hr>
          <div className='breakdown-button-style'>
            <ProgressButtonsComponent
              progressButtonsData={progressButtonsData}
              role={'admin'}
            />
            <TaskButtonsComponent
              taskButtonsData={taskButtonsData}
              role={'admin'}
            />
          </div>
        </div>
      </div>
    )
  })
}
interface Props {
  breakdownTasksData: BreakdownTasks[]
  role: Roles
}

const BreakdownTasksComponent: FC<Props> = ({ breakdownTasksData, role }) => {
  return <div>{renderBreakdownTasksSection(breakdownTasksData, role)}</div>
}

export default BreakdownTasksComponent
