import React, { useState } from 'react'
import MainInput from './main_input'

export default {
  component: MainInput,
  title: 'MainInput',
};

export const Default = () => {

  const [input, setInput] = useState('')

  return (
    <MainInput
      input={input}
      placeholder='メモを入力…'
      onChangeInput={value => setInput(value)}
      onClickCheckbox={() => setInput('')}
    />
  )
}
