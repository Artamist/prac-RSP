import React from 'react'
import { FC } from 'react'

import '../style/progress.scss'

import ButtonSetComponent from './ButtonSet'
import { Button } from '../button'

import { BreakdownTasks, Roles } from '../breakdownTasks'

const buttonData: Button[] = [
  {
    label: 'quizes',
    handler: () => console.log('Hello World'),
    roles: ['user', 'admin', 'teacher'],
    color: 'green'
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
      <div className='breakdown-style'>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js'></script>
        <canvas id='doughnut-chart' width='800' height='450'></canvas>
        {/* Ask about inserting chart add on for circle graph INSERT CIRCLE GRAPH HERE */}
        <div className='breakdown-tasks-box'>
          <header className='breakdown-tasks-header'>
            {/* Insert percentage props*/}Breakdown Tasks
            <hr className='line-style'></hr>
          </header>
          <div className='breakdown-button-style'>
            <ButtonSetComponent buttonData={buttonData} role={'user'} />
            <hr className='line-style'></hr>
          </div>

          <div className='breakdown-button-style'>
            <ButtonSetComponent buttonData={buttonData} role={'user'} />
            <hr className='line-style'></hr>
          </div>
          <div className='breakdown-button-style'>
            <ButtonSetComponent buttonData={buttonData} role={'user'} />
            <hr className='line-style'></hr>
          </div>
          <div className='breakdown-button-style'>
            <ButtonSetComponent buttonData={buttonData} role={'user'} />
            <hr className='line-style'></hr>
          </div>
          <div className='breakdown-button-style'>
            <ButtonSetComponent buttonData={buttonData} role={'user'} />
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
