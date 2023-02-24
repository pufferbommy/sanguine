import {
  Box,
  Heading,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  IconButton,
  Flex,
  Tooltip,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useEffect, useRef, useState } from 'react'

type SoundProps = {
  cover: string
  name: string
  src: string
}

function Sound({ cover, name, src }: SoundProps) {
  const [volume, setVolume] = useState(0.5)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  function decreaseVolume() {
    setVolume((prevVolume) => {
      const newVolume = prevVolume - 0.1
      if (newVolume < 0) {
        alert('Can not decrease anymore!!!')
        return prevVolume
      }
      return newVolume
    })
  }

  function increaseVolume() {
    setVolume((prevVolume) => {
      const newVolume = prevVolume + 0.1
      if (newVolume > 1) {
        alert('Can not increase anymore!!!')
        return prevVolume
      }
      return newVolume
    })
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  return (
    <Box
      rounded="2xl"
      overflow="hidden"
      shadow={isPlaying ? 'base' : 'none'}
      h="full"
      cursor="pointer"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsPlaying((prev) => !prev)
        }
      }}
      pos="relative"
    >
      <Heading pointerEvents="none" pos="absolute" left={2} top={2} color="white" size="sm" as="h3">
        {name}
      </Heading>
      <Image userSelect="none" pointerEvents="none" src={cover} alt={name} />
      <Flex
        bgColor="white"
        pos="absolute"
        bottom={2}
        left={2}
        right={2}
        p={2}
        shadow="base"
        rounded="2xl"
        gap={4}
        visibility={isPlaying ? 'visible' : 'hidden'}
      >
        <IconButton
          size="xs"
          onClick={decreaseVolume}
          aria-label="decrease sound volume"
          icon={<ChevronLeftIcon />}
        />
        <Slider
          min={0}
          max={1}
          step={0.1}
          value={volume}
          defaultValue={volume}
          colorScheme="pink"
          onChange={(newValue) => setVolume(newValue)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="pink.500"
            color="white"
            placement="top"
            isOpen={showTooltip}
            label={`${Math.round(volume * 100)}%`}
          >
            <SliderThumb />
          </Tooltip>
        </Slider>
        <IconButton
          size="xs"
          onClick={increaseVolume}
          aria-label="increase sound volume"
          icon={<ChevronRightIcon />}
        />
      </Flex>
      {isPlaying && <audio ref={audioRef} autoPlay loop src={src} />}
    </Box>
  )
}
export default Sound
