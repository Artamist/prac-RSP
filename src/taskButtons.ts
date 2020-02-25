export type Roles = 'guest' | 'user' | 'teacher' | 'admin'

export type Colors = 'primary' | 'secondary' | 'red' | 'yellow' | 'green'

export type Label = 'View' | 'Edit' | 'Delete' | 'Checkmark'

export interface TaskButtons {
  url?: string
  label: Label
  handler: () => void
  roles: Roles[]
  color: Colors
  completed: boolean
}
