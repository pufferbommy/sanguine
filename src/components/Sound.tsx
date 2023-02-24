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

  const toggleTooltipEventsProps = {
    onMouseEnter: () => setShowTooltip(true),
    onMouseLeave: () => setShowTooltip(false),
  }

  function adjustVolume(amount: number) {
    setVolume((prevVolume) => (prevVolume * 10 + amount * 10) / 10)
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
          isDisabled={volume <= 0}
          size="xs"
          onClick={() => adjustVolume(-0.1)}
          aria-label="decrease sound volume"
          icon={<ChevronLeftIcon />}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        />
        <Slider
          min={0}
          max={1}
          step={0.1}
          value={volume}
          defaultValue={volume}
          colorScheme="pink"
          onChange={(newValue) => setVolume(newValue)}
          {...toggleTooltipEventsProps}
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
            label={Math.round(volume * 100) + '%'}
          >
            <SliderThumb />
          </Tooltip>
        </Slider>
        <IconButton
          isDisabled={volume >= 1}
          size="xs"
          onClick={() => adjustVolume(+0.1)}
          aria-label="increase sound volume"
          icon={<ChevronRightIcon />}
          {...toggleTooltipEventsProps}
        />
      </Flex>
      {isPlaying && <audio ref={audioRef} autoPlay loop src={src} />}
    </Box>
  )
}
export default Sound
