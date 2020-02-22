/** @jsx createElement */

import { createElement } from 'react'

import './style/routines.scss'

import CarouselBanner from './Components/CarouselBanner'

import TaskComponent from './Components/TaskComponent'
import { Task } from './task'

import CourseCompletionComponent from './Components/CourseCompletionComponent'
import { CourseCompletion } from './courseCompletion'

import BreakdownTasksComponent from './Components/BreakdownTasks'
import { BreakdownTasks } from './breakdownTasks'

import CreateContentComponent from './Components/CreateContentComponent'
import { CreateContent } from './createContent'

// import nav
// import search bar
const handler = 'window.location.href = {url}'
//change url in data below for view to assign proper desination with {url}
const taskData: Task[] = [
  {
    url: 'http://www.google.com/',
    handler: () => handler,
    label: ['Finish Week 1 Intro'],
    roles: ['user'],
    checked: false
  }
]

const courseCompletionData: CourseCompletion[] = [
  {
    label: ['video'],
    roles: ['user', 'admin', 'teacher'],
    checked: false
  }
]

const breakdownTasksData: BreakdownTasks[] = [
  {
    url: 'www/google.com',
    label: ['hello'],
    roles: ['admin'],
    checked: false
  }
]

const ProgressPage: React.FC = () => {
  return (
    <div className='progress-page'>
      <CarouselBanner />
      <div className='progress-page-layout'>
        <div className='page-info-box'>
          <header className='info-header'>Page Info Header</header>
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
            <hr className='line-header-style'></hr>
            {/* What's Next Tasks */}
            <TaskComponent taskData={taskData} role={'user'} />
          </div>
          <div className='task-list-box'>
            <header className='tasks-header'>Tasks</header>
            <hr className='line-header-style'></hr>
            {/* Tasks */}
            <TaskComponent taskData={taskData} role={'user'} />
          </div>
        </div>
      </div>
      <div className='course-completion-box'>
        <CourseCompletionComponent
          courseCompletionData={courseCompletionData}
          role={'user'}
        />
      </div>
      <BreakdownTasksComponent
        breakdownTasksData={breakdownTasksData}
        role={'admin'}
      />
    </div>
  )
}
export default ProgressPage
