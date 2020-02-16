/** @jsx createElement */

import { createElement, FC } from 'react'

import '../style/library.scss'

import { TaskButtons, Roles } from '../taskButtons'

import { ContentLibrary } from '../contentLibrary'
import TaskButtonsComponent from './TaskButtons'

const taskButtonsData: TaskButtons[] = [
  {
    label: 'Button1',
    handler: () => console.log('Hello World'),
    roles: ['user'],
    color: 'primary'
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
          <header className='tasks-header'>Your Content Library</header>
          <hr className='line-header-style'></hr>
        </div>
        <div>
          {/* Insert Folder Icon*/}
          <button className='new-folder-button'>New Folder</button>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <a href='#'>{/* label */}TS Intro</a>
                <TaskButtonsComponent
                  taskButtonsData={taskButtonsData}
                  role={'admin'}
                />
              </div>
            </li>
          </ul>
          <ul>
            <li>
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
