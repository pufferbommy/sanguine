import { Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { soundInfos } from '../constants/soundInfos'
import Sound from './Sound'
import SoundSets from './SoundSets'
import { useState } from 'react'

const defaultIsPlayingList = new Array(soundInfos.length).fill(false)

function Sounds() {
  const [isPlayingList, setIsPlayingList] = useState<boolean[]>(defaultIsPlayingList)

  function stopAllCurrentSounds() {
    setIsPlayingList(defaultIsPlayingList)
  }

  function selectSoundSet(soundIndexs: number[]) {
    const newIsPlayingList = [...defaultIsPlayingList]
    soundIndexs.forEach((soundIndex) => {
      newIsPlayingList[soundIndex] = true
    })
    setIsPlayingList(newIsPlayingList)
  }

  function togglePlay(index: number) {
    setIsPlayingList((prev) => {
      const newIsPlayingList = [...prev]
      newIsPlayingList[index] = !newIsPlayingList[index]
      return newIsPlayingList
    })
  }

  return (
    <Container mt={4}>
      <Flex mb={4} justifyContent="space-between" alignItems="center">
        <Heading size="md" as="h2">
          Sounds
        </Heading>
        <SoundSets stopAllCurrentSounds={stopAllCurrentSounds} selectSoundSet={selectSoundSet} />
      </Flex>
      <SimpleGrid columns={[2, null, 3]} gap={2}>
        {soundInfos.map(({ name, cover, src }, index) => (
          <Sound
            key={name}
            name={name}
            cover={cover}
            src={src}
            isPlaying={isPlayingList[index]}
            togglePlay={() => togglePlay(index)}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}
export default Sounds
