import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'

interface Props {
  title: string
  description: string
  completed: boolean
  onCompleted: (completed: boolean) => void
}

const Todo = (props: Props) => {
  return (
    <Card sx={{ minHeight: 150 }}>
      <Box p={2}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox size='small'
            checked={props.completed}
            onChange={e => props.onCompleted(e.target.checked)}
          />
          <Typography
              component='div'
              sx={{ fontSize: '16px' }}
            >
            { props.title }
          </Typography>
        </Box>
        <Box p={1}>
          <Typography
              variant='body2'
              sx={{
                fontSize: '14px',
                whiteSpace: 'pre-line',
              }}
            >
            { props.description }
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}

export default Todo
