import { combineReducers } from 'redux'
import { Action } from '~/action'
import * as fromLoadTodosSagaAction from '~/action/saga/loadTodos'
import * as fromHomePageAction from '~/action/page/home'
import * as fromTodoDomain from '~/domain/todo'

function byId(state: { [key: string]: fromTodoDomain.Todo } = {}, action: Action): { [key: string]: fromTodoDomain.Todo } {
  switch(action.type) {

    case fromLoadTodosSagaAction.FETCH_TODOS_SUCCESS: {
      return action.payload.todos.reduce((obj, todo) => ({
        ...obj,
        [todo.id]: todo,
      }), {})
    }

    case fromHomePageAction.ON_COMPLETED_TODO: {
      const { id, completed } = action.payload

      return {
        ...state,
        [id]: fromTodoDomain.changeCompleted(state[id], completed)
      }
    }

    default: {
      return state
    }

  }
}

function ids(state = [], action: Action): string[] {
  switch(action.type) {

    case fromLoadTodosSagaAction.FETCH_TODOS_SUCCESS: {
      return action.payload.todos.map(todo => todo.id)
    }

    default: {
      return state
    }

  }
}

interface State {
  byId: ReturnType<typeof byId>,
  ids: ReturnType<typeof ids>,
}

export default combineReducers({
  byId,
  ids,
})

export function getAll(state: State): fromTodoDomain.Todo[] {
  return state.ids.map(id => state.byId[id])
}
