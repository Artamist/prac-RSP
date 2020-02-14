import React from 'react'

import './style/App.scss'
import './style/routines.scss'
import './style/progress.scss'

import RoutinesPage from './routinesPage'
import ProgressPage from './progressPage'

const App: React.FC = () => {
  return (
    <div className='App'>
      <RoutinesPage />
      <ProgressPage />
      {/*<ButtonSet buttonData={buttonData} role={'user'} />*/}
    </div>
  )
}

export default App
