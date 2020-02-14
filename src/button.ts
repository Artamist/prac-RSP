export type Roles = 'guest' | 'user' | 'teacher' | 'admin'

export type Colors = 'primary' | 'secondary' | 'red' | 'yellow' | 'green'

export type Labels = 'video' | 'quizes' | 'blogs'

export interface Button {
  label: Labels[]
  handler: () => void
  roles: Roles[]
  color: Colors
}
