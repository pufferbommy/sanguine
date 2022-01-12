import React from 'react'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// context provider
import { ThemeProvider } from './contexts/ThemeContext'

// components
import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
