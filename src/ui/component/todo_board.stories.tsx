import React, { useState } from 'react'
import TodoBoard from './todo_board'
import Todo from './todo'

export default {
  component: TodoBoard,
  title: 'TodoBoard'
}

const useCompleted = (count: number) => {
  const [state, setState] = useState(Array(count).fill(false) as boolean[])

  const setCompleted = (index: number) => (completed: boolean) => {
    const copy = [ ...state ]
    copy[index] = completed
    setState(copy)
  }

  return { completed: state, setCompleted }
}

export const Default = () => {

  const { completed, setCompleted } = useCompleted(3)

  return (
    <TodoBoard>
      <Todo
        title='タイトル1'
        description={'XXX\nXXX\nXXX\nXXX\nXXX\nXXX\n'}
        completed={completed[0]}
        onCompleted={setCompleted(0)}
      />
      <Todo
        title='タイトル2'
        description={'XXX\nXXX\nXXX\n'}
        completed={completed[2]}
        onCompleted={setCompleted(2)}
      />
      <Todo
        title='タイトル3'
        description={'XXX\nXXX\nXXX\nXXX\nXXX\n'}
        completed={completed[3]}
        onCompleted={setCompleted(3)}
      />
    </TodoBoard>
  )
}
