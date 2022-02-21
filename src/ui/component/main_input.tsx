import React, { useRef } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

interface Props {
  input: string
  placeholder: string
  onChangeInput: (value: string) => void
  onClickCheckbox: () => void
}

export default (props: Props) => {
  const theme = useTheme()
  const inputRef = useRef<HTMLDivElement>(null)

  if(inputRef.current && inputRef.current.innerText !== props.input) {
    // When changing the input value through the props, the caret moves forward.
    inputRef.current.innerText = props.input
  }

  return (
    <Card>
      <Box
          sx={{
            padding: 2,
            position: 'relative',
          }}
        >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            display: props.input ? 'none' : undefined,
          }}
        >
          <Typography>{ props.placeholder }</Typography>
        </Box>
        <Box
          style={{
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(1),
          }}
        >
          <IconButton
            onClick={props.onClickCheckbox}
          >
            <CheckBoxIcon
              fontSize='small'
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: '20px',
            height: '20px',
            float: 'right',
          }}
        />
        <div
          ref={inputRef}
          contentEditable
          style={{
            width: '100%',
            minHeight: '20px',
            fontFamily: theme.typography.fontFamily,
            fontSize: '1rem',
            outline: 'none',
          }}
          onInput={
            e => {
              props.onChangeInput(e.currentTarget.innerText)
            }
          }
        />
      </Box>
    </Card>
  )
}
