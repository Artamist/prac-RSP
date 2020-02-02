/** @jsx createElement */

import { createElement, FC } from 'react'
import { Button, Roles } from '../button'

function renderButtonList(buttons: Button[], currentRole: Roles) {
  return buttons.map((button: Button) => {
    const { roles, handler, label, color } = button

    if (!roles.includes(currentRole)) return

    return (
      <button onClick={handler} className={`button micro small ${color}`}>
        {label}
      </button>
    )
  })
}

interface Props {
  buttonData: Button[]
  role: Roles
}

const ButtonSetComponent: FC<Props> = ({ buttonData, role }) => {
  return (
    <section className='button-set button-style'>
      {renderButtonList(buttonData, role)}
    </section>
  )
}

export default ButtonSetComponent
