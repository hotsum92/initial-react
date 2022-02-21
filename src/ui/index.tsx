import React from 'react'
import CssBaseLine from './css_base_line'
import ThemeProvider from './theme_provider'
import Router from './router'

export default function App() {
  return (
    <>
      <CssBaseLine />
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
}
