import React from 'react'
import Container from './Container'
import { BiShuffle } from 'react-icons/bi'
import { Fade } from 'react-reveal'

const Shuffle = () => {
  return (
    <Fade bottom distance={'25%'}>
      <Container classNameLists={'my-8 flex justify-end'}>
        <span className="hover:cursor-pointer p-3 bg-pink-400 hover:bg-pink-500 transition-color duration-300 rounded-full">
          <BiShuffle className="text-xl fill-white" />
        </span>
      </Container>
    </Fade>
  )
}

export default Shuffle
