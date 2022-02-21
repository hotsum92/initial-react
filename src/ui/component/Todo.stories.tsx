import React, { useState } from 'react'
import Todo from './todo'

export default {
  component: Todo,
  title: 'Todo',
};

export const Default = () => {

  const [completed, setCompleted] = useState(false)

  return (
    <Todo
      title='タイトル'
      description='説明'
      completed={completed}
      onCompleted={setCompleted}
    />
  )
}
