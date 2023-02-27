import { Box, Image, Skeleton } from '@chakra-ui/react'
import useBigImage from '../hooks/useBigImage'

function BigImage() {
  const bigImage = useBigImage()
  return (
    <Box position="relative" height={60} as="section">
      {!bigImage && <Skeleton rounded="xl" height="full" />}
      <Image
        pos="absolute"
        inset={0}
        rounded="xl"
        border="none"
        h="full"
        w="full"
        objectFit="cover"
        src={bigImage?.urls?.regular}
      />
    </Box>
  )
}
export default BigImage
