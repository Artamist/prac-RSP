import React from 'react'

import './style/App.scss'
import './style/routines.scss'
import './style/progress.scss'

import RoutinesPage from './RoutinesPage'
import ProgressPage from './ProgressPage'
import LibraryPage from './LibraryPage'

const App: React.FC = () => {
  return (
    <div className='App'>
      <RoutinesPage />
      <ProgressPage />
      <LibraryPage />
    </div>
  )
}

export default App
