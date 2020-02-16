export type Roles = 'guest' | 'user' | 'teacher' | 'admin'

export type Label = 'foldername'

export interface ContentLibrary {
  label: Label[]
  roles: Roles[]
}
