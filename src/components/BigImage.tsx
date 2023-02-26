import { Box, Image, Skeleton } from '@chakra-ui/react'
import useBigImage from '../hooks/useBigImage'

function BigImage() {
  const bigImageUrl = useBigImage()

  return (
    <Box as="section">
      {!bigImageUrl ? (
        <Skeleton rounded="xl" height="60" />
      ) : (
        <Image rounded="xl" h="60" w="full" objectFit="cover" src={bigImageUrl} />
      )}
    </Box>
  )
}
export default BigImage
