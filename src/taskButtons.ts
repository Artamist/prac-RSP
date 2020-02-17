export type Roles = 'guest' | 'user' | 'teacher' | 'admin'

export type Colors = 'primary' | 'secondary' | 'red' | 'yellow' | 'green'

export interface TaskButtons {
  url?: string
  label: string
  handler: () => void
  roles: Roles[]
  color: Colors
}
