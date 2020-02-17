export type Roles = 'guest' | 'user' | 'teacher' | 'admin'

export type Label = 'video' | 'quizes' | 'blogs'

export interface CourseCompletion {
  label: Label[]
  roles: Roles[]
  completed: boolean
}
