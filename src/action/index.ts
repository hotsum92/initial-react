import * as fromHomePageAction from './page/home'
import * as fromLoadTodosAction from './saga/loadTodos'

export type Action =
  | fromHomePageAction.OnCompletedTodo
  | fromHomePageAction.OnChangeTextField
  | fromLoadTodosAction.FetchTodosSuccess
