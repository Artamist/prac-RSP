import React from 'react'
import { FC } from 'react'

import ButtonSetComponent from './ButtonSet'
import { Button } from '../button'

import { CourseCompletion, Roles } from '../courseCompletion'

const buttonData: Button[] = [
  {
    label: ['video', 'quizes', 'blogs'],
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
      <div>
        <header>Course Completion</header>
        {/* Ask about inserting chart add on for circle graph INSERT CIRCLE GRAPH HERE */}
        <div>
          <ButtonSetComponent buttonData={buttonData} role={'user'} />
        </div>
        <div>
          <ButtonSetComponent buttonData={buttonData} role={'user'} />
        </div>
        <div>
          <ButtonSetComponent buttonData={buttonData} role={'user'} />
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
