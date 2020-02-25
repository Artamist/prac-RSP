/** @jsx createElement */

import { v4 } from 'uuid'

import { createElement, FC } from 'react'
import { CreateContent, Roles } from '../createContent'

import { Field } from './Field'

import ProgressButtonsComponent from './ProgressButtons'
import { ProgressButtons } from '../progressButtons'

import hamburger from '../Images/hamburger.svg'

const progressButtonsData: ProgressButtons[] = [
  {
    url: 'www.google.com',
    label: 'example membership',
    handler: () => console.log('Hello Example'),
    roles: ['admin'],
    color: 'green'
  }
]

function renderCreateContent(
  createContent: CreateContent[],
  currentRole: Roles
) {
  return createContent.map((createContent: CreateContent) => {
    const { url, roles, label } = createContent

    if (!roles.includes(currentRole)) return

    return (
      <div key={v4()} className='create-content-wrapper'>
        <div className='create-content-header-wrapper'>
          <header className='create-content-tasks-header'>
            Create Content
            <hr className='line-header-style'></hr>
          </header>
        </div>
        <div></div>
        <div className='create-form-title-wrapper'>
          <form>
            <label className='create-form-title-label'>Title</label>
            <input type='text'></input>
          </form>
        </div>
        <div className='create-form-wrapper'>
          <label className='create-form-description-label'>Title</label>
          <textarea></textarea>
        </div>
        {/* Insert Upload Content Section Here */}
        <Field
          id='Category'
          label='Category'
          editor='dropdown'
          options={['Select', '12:00 AM', '01:00 AM']}
        />
        {/* Props for categories insert in options section above */}
        <div>
          <header>Assign Membership Level</header>
          <div>
            <ProgressButtonsComponent
              progressButtonsData={progressButtonsData}
              role={'admin'}
            />
            <ProgressButtonsComponent
              progressButtonsData={progressButtonsData}
              role={'admin'}
            />
            <ProgressButtonsComponent
              progressButtonsData={progressButtonsData}
              role={'admin'}
            />
          </div>
          <div className='content-order-wrapper'>
            <header>Order of Content</header>
            <div className='order-content-wrapper'>
              <ul className='order-list-style'>
                <li className='content-style'>
                  <label>
                    Intro to Programming {/* Props Data for content title*/}
                  </label>
                  <img
                    className='hamburger-icon-style'
                    src={hamburger}
                    alt='drag hamburger icon'
                  ></img>
                </li>
              </ul>
              <hr className='line-header-order-style'></hr>
              <ul className='order-list-style'>
                <li className='content-style'>
                  <label>
                    JS Beginner's Guide {/* Props Data for content title*/}
                  </label>
                  <img
                    className='hamburger-icon-style'
                    src={hamburger}
                    alt='drag hamburger icon'
                  ></img>
                </li>
              </ul>
              <hr className='line-header-order-style'></hr>
              <ul className='order-list-style'>
                <li className='content-style'>
                  <label>
                    Advanced JS Guide {/* Props Data for content title*/}
                  </label>
                  {/* Props Data for content title*/}
                  <img
                    className='hamburger-icon-style'
                    src={hamburger}
                    alt='drag hamburger icon'
                  ></img>
                </li>
              </ul>
              <hr className='line-header-order-style'></hr>
            </div>
          </div>
          <form id='form'>
            <br></br>
            <button className='submit-button' type='submit'>
              Submit form
            </button>
            <p id='log'></p>
          </form>
        </div>
      </div>
    )
  })
}

interface Props {
  createContentData: CreateContent[]
  role: Roles
}

const CreateContentComponent: FC<Props> = ({ createContentData, role }) => {
  return (
    <div className='task-button-set task-button-style'>
      {renderCreateContent(createContentData, role)}
    </div>
  )
}

export default CreateContentComponent
