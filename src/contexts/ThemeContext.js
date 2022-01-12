import { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${
          theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-slate-50 text-zinc-900'
        } min-h-screen transition duration-200`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
