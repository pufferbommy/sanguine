import { Button, IconButton, ButtonGroup } from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'

type SoundSetProps = {
  selectSoundSet: (soundIndexs: number[]) => void
  stopAllCurrentSounds: () => void
}

function SoundSets({ selectSoundSet, stopAllCurrentSounds }: SoundSetProps) {
  return (
    <div>
      <ButtonGroup size="xs" spacing="2">
        <Button
          rightIcon={<SmallCloseIcon />}
          aria-label="play river sound and waterfall sound"
          onClick={stopAllCurrentSounds}
          colorScheme="red"
        >
          Clear
        </Button>
        <Button
          aria-label="play river sound and waterfall sound"
          onClick={() => selectSoundSet([3, 5])}
          colorScheme="blue"
        >
          Stream
        </Button>
        <Button
          aria-label="play rain sound and lofi sound"
          onClick={() => selectSoundSet([1, 2])}
          colorScheme="teal"
        >
          Atmospheric
        </Button>
        <Button
          aria-label="play rain sound and campfire sound"
          onClick={() => selectSoundSet([1, 4])}
          colorScheme="orange"
        >
          Cozy
        </Button>
      </ButtonGroup>
    </div>
  )
}
export default SoundSets
