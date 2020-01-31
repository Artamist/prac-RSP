import React from 'react'
import './style/routines.scss'
import RoutineHeader from './RoutineHeader'

// import nav
// import search bar
//hard wired components need to be seperated

const RoutinesPage: React.FC = () => {
  return (
    <div className='routines-page'>
      <RoutineHeader />
      <div className='page-info-box'>
        <p className='page-info'>
          This page displays your basic task info! Create and manage tasks here!
          This page displays your basic task info! Create and manage tasks here!
          This page displays your basic task info! Create and manage tasks here!
        </p>
      </div>
      <div className='task-list-box'>{/* What's Next Tasks */}</div>
      <div className='task-list-box'>{/* Tasks */}</div>
      <div className='custom-tasks-box'>{/* Edit Custom Tasks */}</div>
    </div>
  )
}
export default RoutinesPage
