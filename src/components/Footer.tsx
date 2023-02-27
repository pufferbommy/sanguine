import { Box, Container } from '@chakra-ui/react'

import { Link } from '@chakra-ui/react'

function Footer() {
  return (
    <Container display="flex" py={10}>
      <Box fontSize="sm" mr="auto">
        Jump to{' '}
        <Link color="pink.500" target="_blank" href="https://github.com/pufferbommy/sanguine">
          this code
        </Link>{' '}
        on github
      </Box>
      <Box fontSize="sm">
        Made with love by{' '}
        <Link color="pink.500" target="_blank" href="https://github.com/pufferbommy">
          @pufferbommy
        </Link>
      </Box>
    </Container>
  )
}
export default Footer
