import React from 'react'
import logo from './logo.svg'
import './App.scss'
import './style/routines.scss'

import ButtonSet from './style/Components/ButtonSet'
import { Button } from './button'

import { Task } from './task'
import TaskComponent from './TaskComponent'

import RoutinesPage from './routinesPage'

const buttonData: Button[] = [
  {
    label: 'Button1',
    handler: () => console.log('Hello World'),
    roles: ['user'],
    color: 'primary'
  }
]
const taskData: Task[] = [
  {
    url: 'http://www.google.com/',
    label: 'Finish Week 1 Intro',
    roles: ['user']
  }
]

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <TaskComponent taskData={taskData} role={'user'} />
        <ButtonSet buttonData={buttonData} role={'user'} />
      </header>
      <RoutinesPage />
    </div>
  )
}

export default App
