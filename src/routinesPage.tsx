/** @jsx createElement */

import { createElement } from 'react'
import './style/routines.scss'
import RoutineBanner from './Components/RoutineBanner'

import TaskComponent from './Components/TaskComponent'
import { Task } from './task'

import CustomTasksComponent from './Components/CustomTasksComponent'
import { CustomTasks } from './customTasks'

import CourseCompletionComponent from './Components/CourseCompletionComponent'
import { CourseCompletion } from './courseCompletion'

// import nav
// import search bar
// hard wired components need to be seperated /header /TaskButtons

const taskData: Task[] = [
  {
    url: 'http://www.google.com/',
    label: ['Finish Week 1 Intro'],
    roles: ['user'],
    completed: false
  }
]
const customTasksData: CustomTasks[] = [
  {
    url: 'http://www.google.com/',
    label: ['Finish Week 1 Intro'],
    roles: ['user'],
    completed: false
  }
]

const courseCompletionData: CourseCompletion[] = [
  {
    label: ['video'],
    roles: ['user', 'admin', 'teacher'],
    completed: true
  }
]

const RoutinesPage: React.FC = () => {
  return (
    <div className='routines-page'>
      <RoutineBanner />
      <div className='routines-page-layout'>
        <div className='page-info-box'>
          <p className='page-info'>
            This page displays your basic task info! Create and manage tasks
            here! This page displays your basic task info! Create and manage
            tasks here! This page displays your basic task info! Create and
            manage tasks here!
          </p>
        </div>
        <div className='task-container'>
          <div className='task-list-box'>
            <header className='whats-next-header'>What's Next Tasks</header>
            {/* What's Next Tasks */}
            <TaskComponent taskData={taskData} role={'user'} />
          </div>
          <div className='task-list-box'>
            <header className='tasks-header'>Tasks</header>
            {/* Tasks */}
            <TaskComponent taskData={taskData} role={'user'} />
          </div>
        </div>
      </div>
      <div className='custom-tasks-box'>
        <CustomTasksComponent customTasksData={customTasksData} role={'user'} />
        {/* Edit Custom Tasks */}
        <CourseCompletionComponent
          courseCompletionData={courseCompletionData}
          role={'user'}
        />
      </div>
    </div>
  )
}
export default RoutinesPage
