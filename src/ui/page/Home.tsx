import React, { useEffect } from 'react'
import Todo from '~/ui/component/todo'
import TodoBoard from '~/ui/component/todo_board'
import { useDispatch, useSelector } from 'react-redux'
import * as fromHomePageAction from '~/action/page/home'
import * as fromReducer from '~/reducer'

const Home = () => {
  const dispatch = useDispatch()
  const todos = useSelector(fromReducer.getTodoDomainAll)

  useEffect(() => {
    dispatch(fromHomePageAction.onLoadedPage())
  }, [])

  return (
    <TodoBoard>
      { todos.map(todo =>
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
          onCompleted={completed => dispatch(fromHomePageAction.onCompletedTodo(todo.id, completed))}
        />
      ) }
    </TodoBoard>
  )
}

export default Home
