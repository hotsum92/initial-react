import { Todo } from '~/domain/todo'
import * as fromFetchTodosService from '~/service/fetchTodos'

export const FETCH_TODOS_SUCCESS = 'LOAD_TODOS.FETCH_TODOS_SUCCESS'

export interface FetchTodosSuccess {
  type: typeof FETCH_TODOS_SUCCESS
  payload: {
    todos: Todo[]
  }
}

export const fetchTodosSuccess =
  (res: fromFetchTodosService.FetchTodosSuccessResponse): FetchTodosSuccess =>
  ({
    type: FETCH_TODOS_SUCCESS,
    payload: {
      todos: res.result.todos,
    }
  })
