import { combineReducers } from 'redux'
import page from './page'
import domain from './domain'
import * as fromHomePageReducer from './page/home'
import * as fromTodoDomainReducer from './domain/todo'

const reducer = combineReducers({
  domain,
  page,
})

export type State = ReturnType<typeof reducer>

export function getHomePageText(state: State) {
  return fromHomePageReducer.getText(state.page.home)
}

export function getTodoDomainAll(state: State) {
  return fromTodoDomainReducer.getAll(state.domain.todo)
}

export default reducer
