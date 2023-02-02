import { Box, Container, Heading, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function Header() {
  return (
    <Box borderBottom="1px" py={4}>
      <Container display="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h1">
          Sanguine
          <Box
            position="relative"
            _after={{
              pos: 'absolute',
              bottom: -0.5,
              left: 0,
              content: '""',
              width: '100%',
              bgColor: 'black',
              height: '4px',
            }}
            as="span"
          >
            . .
          </Box>
        </Heading>
        <IconButton aria-label="moon" icon={<MoonIcon />} />
      </Container>
    </Box>
  )
}
export default Header
