import { combineReducers } from 'redux'
import { Action } from '~/action'
import * as fromHomePageAction from '~/action/page/home'

function text(state = 'initial', action: Action) {
  switch(action.type) {
    case fromHomePageAction.ON_CHANGE_TEXT_FIELD: {
      return action.payload.value
    }

    default: {
      return state
    }
  }
}

const reducer = combineReducers({
  text,
})

export type State = ReturnType<typeof reducer>

export function getText(state: State) {
  return state.text
}

export default reducer
