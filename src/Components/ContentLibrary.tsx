/** @jsx createElement */

import { createElement, FC } from 'react'

import '../style/library.scss'

import { TaskButtons, Roles } from '../taskButtons'

import { ContentLibrary } from '../contentLibrary'
import TaskButtonsComponent from './TaskButtons'

import TaskComponent from './TaskComponent'
import { Task } from '../task'

import newFolder from '../Images/newFolder.svg'
import openFolder from '../Images/openFolder.svg'
import folder from '../Images/folder.svg'

const taskButtonsData: TaskButtons[] = [
  {
    label: 'Button1',
    handler: () => console.log('Hello World'),
    roles: ['admin'],
    color: 'primary'
  }
]
const handler = 'window.location.href = {url}'
//change url in data below for view to assign proper desination with {url}
const taskData: Task[] = [
  {
    url: 'http://www.google.com/',
    handler: () => handler,
    label: ['Finish Week 1 Intro'],
    roles: ['admin'],
    completed: false
  }
]

function renderContentLibrary(
  contentLibrary: ContentLibrary[],
  currentRole: Roles
) {
  return contentLibrary.map((contentLibrary: ContentLibrary) => {
    const { label, roles } = contentLibrary

    if (!roles.includes('admin')) return

    return (
      <div className='content-library-styles'>
        <div className='header-style'>
          <header className='content-header'>Your Content Library</header>
          <hr className='line-header-style'></hr>
        </div>
        <div className='new-folder-style'>
          <button className='new-folder-button'>
            <img
              className='folder-icon-style'
              src={newFolder}
              alt='new folder button'
            ></img>
            New Folder
          </button>
          <div>
            <ul>
              <li>
                <img src={openFolder} alt='open folder'></img>
                <a href='#'>{/* label */}TS Intro</a>
                <TaskButtonsComponent
                  taskButtonsData={taskButtonsData}
                  role={'admin'}
                />
                <div className='open-folder-box-style'>
                  <ul>
                    <li>
                      <TaskComponent taskData={taskData} role={'admin'} />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <img src={folder} alt='folder'></img>
              <a href='#'>{label}</a>
              <TaskButtonsComponent
                taskButtonsData={taskButtonsData}
                role={'admin'}
              />
            </li>
          </ul>
          <ul>
            <li>
              <img src={folder} alt='folder'></img>
              <a href='#'>{label}</a>
              <TaskButtonsComponent
                taskButtonsData={taskButtonsData}
                role={'admin'}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  })
}

interface Props {
  contentLibraryData: ContentLibrary[]
  role: Roles
}

const ContentLibraryComponent: FC<Props> = ({ contentLibraryData, role }) => {
  return (
    <div className='content-library-output'>
      {renderContentLibrary(contentLibraryData, role)}
    </div>
  )
}

export default ContentLibraryComponent
