import React from 'react'

import Container from './Container'

const Footer = () => {
  return (
    <Container>
      <footer className="flex justify-center items-end h-96">
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
