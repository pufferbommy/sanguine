import { Box, Image, Skeleton } from '@chakra-ui/react'
import useBigImage from '../hooks/useBigImage'

function BigImage() {
  const bigImage = useBigImage()
  return (
    <Box height={60} as="section">
      {!bigImage ? (
        <Skeleton rounded="xl" height="full" />
      ) : (
        <Image rounded="xl" border="none" h="full" w="full" objectFit="cover" src={bigImage} />
      )}
    </Box>
  )
}
export default BigImage
