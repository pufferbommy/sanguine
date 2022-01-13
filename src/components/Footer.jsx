import React, { useContext } from 'react'

import Container from './Container'
import { ThemeContext } from '../contexts/ThemeContext.js'

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Container>
      <footer
        className={`fixed ${
          theme === 'dark'
            ? 'text-gray-400 bg-zinc-900 border-t-gray-800'
            : 'text-zinc-900 bg-white'
        }  bottom-0 p-2 transition duration-200 border-t left-0 right-0 w-full shadow text-center`}
      >
        <p>
          Made by{' '}
          <a
            className="underline underline-offset-2 text-pink-500"
            href="https://twitter.com/pufferbommy"
            target={'_blank'}
            rel="noreferrer"
          >
            @pufferbommy
          </a>
        </p>
      </footer>
    </Container>
  )
}

export default Footer
