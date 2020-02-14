import React from 'react'
import { FC } from 'react'

import '../style/progress.scss'

import ButtonSetComponent from './ButtonSet'
import { Button } from '../button'

import { CourseCompletion, Roles } from '../courseCompletion'

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
    const { label, roles, completed } = courseCompletion

    if (!roles.includes(currentRole)) return

    return (
      <div className='completion-style'>
        <header className='completion-header'>Course Completion</header>
        {/* Ask about inserting chart add on for circle graph INSERT CIRCLE GRAPH HERE */}
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
