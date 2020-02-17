/** @jsx createElement */

import { createElement, FC } from 'react'
import { CreateContent, Roles } from '../createContent'

// const checkmark = require('./Images/checkmark.svg'');

function renderCreateContent(
  createContent: CreateContent[],
  currentRole: Roles
) {
  return createContent.map((createContent: CreateContent) => {
    const { url, roles, label } = createContent

    if (!roles.includes(currentRole)) return

    return <div className='create-content-wrapper'></div>
  })
}

interface Props {
  createContentData: CreateContent[]
  role: Roles
}

const CreateContentComponent: FC<Props> = ({ createContentData, role }) => {
  return (
    <button className='task-button-set task-button-style'>
      {renderCreateContent(createContentData, role)}
    </button>
  )
}

export default CreateContentComponent
