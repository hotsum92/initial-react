import { fork, all } from 'redux-saga/effects'
import watchLoadTodos from './loadTodos'

export default function* () {
  yield all([
    fork(watchLoadTodos),
  ])
}
