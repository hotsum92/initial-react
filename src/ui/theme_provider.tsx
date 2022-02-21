import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
  }
}

const theme = createTheme({
});

export interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}

