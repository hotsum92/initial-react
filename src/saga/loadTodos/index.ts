import { take, call, put, fork } from 'redux-saga/effects'
import * as fromLoadTodosSagaAction from '~/action/saga/loadTodos'
import * as fromHomePageAction from '~/action/page/home'
import * as fromFetchTodosService from '~/service/fetchTodos'

export function* loadTodos() {
  const fetchTodosResponse : fromFetchTodosService.FetchTodosResponse
    = yield call(fromFetchTodosService.fetchTodos)

  if(fromFetchTodosService.isSuccess(fetchTodosResponse)) {
    yield put(fromLoadTodosSagaAction.fetchTodosSuccess(fetchTodosResponse))
  } else {

  }
}

export default function* watchLoadTodos() {
  while (true) {
    yield take(fromHomePageAction.ON_LOADED_PAGE)
    yield fork(loadTodos)
  }
}
