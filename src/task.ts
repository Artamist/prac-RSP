export type Roles = 'guest' | 'user' | 'instructor' | 'admin'

export type icon = 'video' | 'article' | 'quiz'

export interface Task {
  url?: string
  icon?: string
  handler: () => void
  label: string[]
  roles: Roles[]
  completed: boolean
}
// need help with how to input multiple icons
