import { v4 } from 'uuid'

export type Roles = 'guest' | 'user' | 'teacher' | 'admin'

export type Colors = 'primary' | 'secondary' | 'red' | 'yellow' | 'green'

export type Key =
  | 'view-button'
  | 'edit-button'
  | 'delete-button'
  | 'checkmark-button'

export type Label = 'View' | 'Edit' | 'Delete' | 'Checkmark'

export interface TaskButtons {
  id: Key
  url?: string
  label: Label
  handler: () => void
  roles: Roles[]
  color: Colors
}
