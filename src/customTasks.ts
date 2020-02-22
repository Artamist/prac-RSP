export type Roles = 'guest' | 'user' | 'instructor' | 'admin'

export interface CustomTasks {
  url?: string
  label: string[]
  roles: Roles[]
  checked: boolean
}
