import React from 'react'
import Masonry from '@mui/lab/Masonry';

interface Props {
  children:
    | React.ReactChild[]
}

const TodoBoard = (props: Props) => {
  return (
    <Masonry columns={2} spacing={2}>
      { props.children }
    </Masonry>
  )
}

export default TodoBoard
