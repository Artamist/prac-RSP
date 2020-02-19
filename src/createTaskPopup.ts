export type Roles = 'guest' | 'user' | 'instructor' | 'admin'

export interface CreateTaskPopup {
  url?: string
  label: string[]
  roles: Roles[]
}