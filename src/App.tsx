import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyled from './config/GlobalStyled'
import AppRoutes from './routes/AppRoutes'

const temas = {
  dark: {
    color: '#fefefe',
    backgroundColor: '#333',
    primary: '#f8b632',
  },

  light: {
    color: '#333',
    backgroundColor: '#fefefe',
    primary: '#333',
  },
}

function App() {
  return (
    <ThemeProvider theme={temas.light}>
      <GlobalStyled />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
