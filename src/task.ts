export type Roles = 'guest' | 'user' | 'instructor' | 'admin'

export interface Task {
  url?: string
  label: string[]
  roles: Roles[]
  completed: boolean
}
