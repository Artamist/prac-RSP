/** @jsx createElement */

import { createElement } from 'react'
import './style/routines.scss'
import CarouselBanner from './Components/CarouselBanner'


import TaskComponent from './Components/TaskComponent'
import { Task } from './task'

import CustomTasksComponent from './Components/CustomTasksComponent'
import { CustomTasks } from './customTasks'

import CreateTaskComponent from './Components/CreateContentComponent'
import { CreateTaskPopup } from './createTaskPopup'

// import nav
// import search bar

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

const createTaskPopup: CreateTaskPopup[] = [
  {
    url: 'http://www.google.com',
    label: ['Run a Marathon in 3 Hours or Less'],
    roles: ['user'],
  }
]

const RoutinesPage: React.FC = () => {
  return (
    <div className='routines-page'>
      <CarouselBanner />
      <div className='routines-page-layout'>
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
      <div className='custom-tasks-box'>
        <header className='library-tasks-header'>Edit Custom Tasks</header>
        <CustomTasksComponent customTasksData={customTasksData} role={'user'} />
        {/* Edit Custom Tasks */}
      </div>
      <div>
        <header className='library-tasks-header'>Create Task Component</header>
        <CreateTaskComponent createContentData={createTaskPopup} role={'user'} />
      </div>
    </div>
  )
}
export default RoutinesPage
