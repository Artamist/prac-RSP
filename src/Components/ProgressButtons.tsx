/** @jsx createElement */

import { v4 } from 'uuid'

import { createElement, FC } from 'react'
import { ProgressButtons, Roles } from '../progressButtons'

function renderProgressButtonsList(
  progressButtons: ProgressButtons[],
  currentRole: Roles
) {
  return progressButtons.map((progressButtons: ProgressButtons) => {
    const { roles, handler, label, color } = progressButtons

    if (!roles.includes(currentRole)) return

    return (
      <div key={v4()}>
        <button onClick={handler} className={`progress-buttons ${color}`}>
          {label}
        </button>
      </div>
    )
  })
}

interface Props {
  progressButtonsData: ProgressButtons[]
  role: Roles
}

const ProgressButtonsComponent: FC<Props> = ({ progressButtonsData, role }) => {
  return (
    <section className='progress-buttons-style'>
      {renderProgressButtonsList(progressButtonsData, role)}
    </section>
  )
}

export default ProgressButtonsComponent
