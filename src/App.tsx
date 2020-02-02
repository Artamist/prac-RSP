import React from 'react'

import './style/App.scss'
import './style/routines.scss'

import ButtonSet from './Components/ButtonSet'
import { Button } from './button'

import { Task } from './task'
import TaskComponent from './Components/TaskComponent'

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
    label: ['Finish Week 1 Intro'],
    roles: ['user'],
    completed: false
  }
]

const App: React.FC = () => {
  return (
    <div className='App'>
      <RoutinesPage />
      {/*<ButtonSet buttonData={buttonData} role={'user'} />*/}
    </div>
  )
}

export default App
