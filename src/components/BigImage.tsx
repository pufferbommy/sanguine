import { Box, Image, Skeleton } from '@chakra-ui/react'
import useBigImage from '../hooks/useBigImage'

function BigImage() {
  const bigImageUrl = useBigImage()

  return (
    <Box>
      {!bigImageUrl ? (
        <Skeleton height={340} />
      ) : (
        <Image h={340} w="full" objectFit="cover" src={bigImageUrl} />
      )}
    </Box>
  )
}
export default BigImage
