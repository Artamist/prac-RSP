export type Roles = 'guest' | 'user' | 'instructor' | 'admin'

export type icon = 'video' | 'article' | 'quiz'

export type handler = () => 'window.location.href = { url }'

export interface Task {
  url?: string
  icon?: string
  handler: () => void
  label: string[]
  roles: Roles[]
  checked: boolean
}
// need help with how to input multiple icons
