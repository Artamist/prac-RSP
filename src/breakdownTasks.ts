export type Roles = 'guest' | 'user' | 'instructor' | 'admin'

export interface BreakdownTasks {
  url?: string
  label: string[]
  roles: Roles[]
  checked: boolean
}
