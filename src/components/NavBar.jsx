import React, { useContext } from 'react'

// context
import { ThemeContext } from '../contexts/ThemeContext'

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  // function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <nav
      className={`bg-transparent px-4 lg:px-0 py-4 shadow  duration-200 transition ${
        theme === 'dark' ? 'border-b-gray-800 border-b' : 'border-b border-white'
      }`}
    >
      <div className="flex max-w-6xl mx-auto justify-between text-2xl text-pink-500">
        <span>Sanguine</span>
        <span className="cursor-pointer select-none" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </span>
      </div>
    </nav>
  )
}

export default NavBar
