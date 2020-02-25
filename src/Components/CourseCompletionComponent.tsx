import React from 'react'
import { FC } from 'react'

import { v4 } from 'uuid'

import '../style/progress.scss'

import ButtonSetComponent from './ButtonSet'
import { Button } from '../button'

import { CourseCompletion, Roles } from '../courseCompletion'

import PieChart from './PieChart'

const buttonData: Button[] = [
  {
    label: 'quizes',
    handler: () => console.log('Hello World'),
    roles: ['user', 'admin', 'teacher'],
    color: 'green'
  }
]

function renderCourseCompletionSection(
  courseCompletion: CourseCompletion[],
  currentRole: Roles
) {
  return courseCompletion.map((courseCompletion: CourseCompletion) => {
    const { label, roles, checked } = courseCompletion

    if (!roles.includes(currentRole)) return

    return (
      <div key={v4()} className='completion-style'>
        <div>
          <header className='completion-header'>Course Completion</header>
          <PieChart />
        </div>
        <div className='completion-button-box'>
          <header className='percent-complete-header'>
            {/* Insert percentage props*/}90% Complete
          </header>
          <div className='completion-button-style'>
            <ButtonSetComponent buttonData={buttonData} role={'user'} />
          </div>
          <div className='completion-button-style'>
            <ButtonSetComponent buttonData={buttonData} role={'user'} />
          </div>
          <div className='completion-button-style'>
            <ButtonSetComponent buttonData={buttonData} role={'user'} />
          </div>
        </div>
      </div>
    )
  })
}
interface Props {
  courseCompletionData: CourseCompletion[]
  role: Roles
}

const CourseCompletionComponent: FC<Props> = ({
  courseCompletionData,
  role
}) => {
  return <div>{renderCourseCompletionSection(courseCompletionData, role)}</div>
}

export default CourseCompletionComponent
