import { Box, Container } from '@chakra-ui/react'

import { Link } from '@chakra-ui/react'

function Footer() {
  return (
    <Container display="flex" py={10}>
      <Box mr="auto">
        Jump To{' '}
        <Link color="pink.500" target="_blank" href="https://github.com/pufferbommy/sanguine">
          Code
        </Link>
      </Box>
      <Box>
        Made with ❤️ by{' '}
        <Link color="pink.500" target="_blank" href="https://github.com/pufferbommy">
          @pufferbommy
        </Link>
      </Box>
    </Container>
  )
}
export default Footer
