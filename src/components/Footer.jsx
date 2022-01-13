import React from 'react'

import Container from './Container'

const Footer = () => {
  return (
    <Container>
      <footer className="fixed dark:text-gray-400 text-zinc-900 bottom-0 p-2 bg-white dark:bg-zinc-900 transition duration-200 dark:border-t-gray-800 left-0 right-0 w-full border-t  shadow text-center">
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
