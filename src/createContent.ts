export type Roles = 'guest' | 'user' | 'instructor' | 'admin'

export interface CreateContent {
  url?: string
  label: string[]
  roles: Roles[]
}
