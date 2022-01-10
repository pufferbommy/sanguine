import React from 'react'

// context provider
import { ThemeProvider } from './contexts/ThemeContext'

// components
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <ThemeProvider>
        <NavBar />
      </ThemeProvider>
    </>
  )
}

export default App
