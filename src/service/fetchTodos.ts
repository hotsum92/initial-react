import { StatusCode } from './http'
import * as fromTodoDomain from '~/domain/todo'

export type FetchTodosResponse =
  | FetchTodosSuccessResponse
  | FetchTodosBadRequestResponse

export interface FetchTodosSuccessResponse {
  status: typeof StatusCode.OK
  result: {
    todos: fromTodoDomain.Todo[]
  }
}

export interface FetchTodosBadRequestResponse {
  status: typeof StatusCode.BAD_REQUEST
}

export function fetchTodos(): FetchTodosResponse {
  return {
    status: StatusCode.OK,
    result: {
      todos: [
        fromTodoDomain.newTodo({ title: 'タイトル1', description: 'タスク説明' }),
        fromTodoDomain.newTodo({ title: 'タイトル2', description: 'タスク説明' }),
        fromTodoDomain.newTodo({ title: 'タイトル3', description: 'タスク説明' }),
        fromTodoDomain.newTodo({ title: 'タイトル4', description: 'タスク説明' }),
      ],
    },
  }
}

export function isSuccess(res: FetchTodosResponse): res is FetchTodosSuccessResponse {
  return res.status === StatusCode.OK
}
