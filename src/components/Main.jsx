import React from 'react'
import { Fade } from 'react-reveal'
import {
  breathImage,
  rainImage,
  fireImage,
  snowImage,
  trainStationImage,
  cafeImage,
  oceanImage,
  waterImage,
  riverImage,
  lofiImage,
} from '../assets/index.js'
import {
  breathSound,
  rainSound,
  fireSound,
  snowSound,
  trainStationSound,
  cafeSound,
  oceanSound,
  waterSound,
  riverSound,
  lofiSound,
} from '../sounds/index.js'

import Card from './Card'
import Container from './Container'

const Main = () => {
  return (
    <>
      <Container
        classNameLists={
          'grid place-items-center my-8 gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
        }
      >
        <Fade bottom distance={'25%'}>
          <Card
            title={'Breath'}
            soundUrl={breathSound}
            imgUrl={breathImage}
            defaultVolume={0.1}
            imageFix={true}
          />
        </Fade>
        <Fade bottom distance={'25%'}>
          <Card title={'Rain'} soundUrl={rainSound} imgUrl={rainImage} />
        </Fade>
        <Fade bottom distance={'25%'}>
          <Card title={'Fire'} soundUrl={fireSound} imgUrl={fireImage} />
        </Fade>
        <Fade bottom distance={'25%'}>
          <Card
            title={'Snow'}
            soundUrl={snowSound}
            imgUrl={snowImage}
            defaultVolume={0.4}
          />
        </Fade>
        <Fade bottom distance={'25%'}>
          <Card
            title={'Train Station'}
            soundUrl={trainStationSound}
            imgUrl={trainStationImage}
          />
        </Fade>
        <Fade bottom distance={'25%'}>
          <Card title={'Cafe'} soundUrl={cafeSound} imgUrl={cafeImage} />
        </Fade>
        <Fade bottom distance={'25%'}>
          <Card
            title={'Ocean'}
            soundUrl={oceanSound}
            imgUrl={oceanImage}
            defaultVolume={0.4}
          />
        </Fade>
        <Fade bottom distance={'25%'}>
          <Card title={'Water'} soundUrl={waterSound} imgUrl={waterImage} />
        </Fade>
        <Fade bottom distance={'25%'}>
          <Card
            title={'River'}
            soundUrl={riverSound}
            imgUrl={riverImage}
            defaultVolume={0.4}
          />
        </Fade>
        <Fade bottom distance={'25%'}>
          <Card
            title={'Lofi'}
            soundUrl={lofiSound}
            imgUrl={lofiImage}
            defaultVolume={0.4}
          />
        </Fade>
      </Container>
    </>
  )
}

export default Main
