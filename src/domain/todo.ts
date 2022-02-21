import { uuid } from './uuid'

export interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
}

export const newTodo =
  ({ title, description }: { title: string, description: string }): Todo =>
    ({
      id: uuid(),
      title: title,
      description: description,
      completed: false,
    })

export const changeCompleted =
  (todo: Todo, completed: boolean): Todo => ({ ...todo, completed })
