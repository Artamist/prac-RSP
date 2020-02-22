/** @jsx createElement */

import { createElement } from 'react'
import './style/routines.scss'
import CarouselBanner from './Components/CarouselBanner'

import CustomTasksComponent from './Components/CustomTasksComponent'
import { CustomTasks } from './customTasks'

import ContentLibraryComponent from './Components/ContentLibrary'
import { ContentLibrary } from './contentLibrary'

import CreateContentComponent from './Components/CreateContentComponent'
import { CreateContent } from './createContent'

const contentLibraryData: ContentLibrary[] = [
  {
    label: ['foldername'],
    roles: ['admin']
  }
]

const createContentData: CreateContent[] = [
  {
    url: 'www.google.com',
    label: ['Content'],
    roles: ['admin']
  }
]
// All pages
// import nav
// import search bar

const customTasksData: CustomTasks[] = [
  {
    url: 'www.google.com',
    label: ['TS Intro'],
    roles: ['admin'],
    checked: false
  }
]

const LibraryPage: React.FC = () => {
  return (
    <div className='library-page'>
      <CarouselBanner />
      <div className='library-page-layout'>
        <div className='page-info-box'>
          <header className='info-header'>Page Info Header</header>
          <p className='page-info'>
            This page displays your basic task info! Create and manage tasks
            here! This page displays your basic task info! Create and manage
            tasks here! This page displays your basic task info! Create and
            manage tasks here!
          </p>
        </div>
        <div>
          <ContentLibraryComponent
            contentLibraryData={contentLibraryData}
            role={'admin'}
          />
        </div>
        <div className='task-container'>
          <div className='content-list-box'>
            <header className='library-tasks-header'>Course Tasks</header>
            <hr className='line-header-style'></hr>
            <CustomTasksComponent
              customTasksData={customTasksData}
              role={'admin'}
            />
          </div>
        </div>
        <CreateContentComponent
          createContentData={createContentData}
          role={'admin'}
        />
      </div>
    </div>
  )
}
export default LibraryPage
