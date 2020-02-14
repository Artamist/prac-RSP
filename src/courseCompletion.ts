export type Roles = 'guest' | 'user' | 'teacher' | 'admin'

export interface CourseCompletion {
  label: string
  roles: Roles[]
  completed: boolean
}
