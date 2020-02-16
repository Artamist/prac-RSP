export type Roles = 'guest' | 'user' | 'instructor' | 'admin'

export type Colors = 'primary' | 'secondary' | 'red' | 'yellow' | 'green'

export interface CreateTaskPopup {
  url?: string
  label: string[]
  roles: Roles[]
  color: Colors
}