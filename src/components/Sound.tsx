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
  useColorMode,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useEffect, useRef, useState } from 'react'

type SoundProps = {
  cover: string
  name: string
  src: string
  isPlaying: boolean
  togglePlay: () => void
}

function Sound({ cover, name, src, isPlaying, togglePlay }: SoundProps) {
  const { colorMode } = useColorMode()
  const [volume, setVolume] = useState(0.5)
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
  }, [volume, isPlaying])

  return (
    <Box
      rounded="xl"
      overflow="hidden"
      shadow={isPlaying ? 'base' : 'none'}
      h="full"
      cursor="pointer"
      onClick={(e) => {
        if (e.target === e.currentTarget) togglePlay()
      }}
      pos="relative"
    >
      <Heading pointerEvents="none" pos="absolute" left={2} top={2} color="white" size="sm" as="h3">
        {name}
      </Heading>
      <Image userSelect="none" pointerEvents="none" src={cover} alt={name} />
      <Flex
        bgColor={colorMode === 'dark' ? 'gray' : 'white'}
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
          colorScheme={colorMode === 'dark' ? 'pink' : undefined}
          isDisabled={volume <= 0}
          size="xs"
          onClick={() => adjustVolume(-0.1)}
          aria-label="decrease sound volume"
          icon={<ChevronLeftIcon />}
          {...toggleTooltipEventsProps}
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
          colorScheme={colorMode === 'dark' ? 'pink' : undefined}
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
