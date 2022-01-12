import React from 'react'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// context provider
import { ThemeProvider } from './contexts/ThemeContext'

// components
import NavBar from './components/NavBar'
import Main from './components/Main'

const App = () => {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App
