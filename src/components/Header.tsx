import { Box, Container, Heading, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box as="header" py={4}>
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
              bgColor: colorMode === 'dark' ? 'white' : 'black',
              height: '4px',
            }}
            as="span"
          >
            . .
          </Box>
        </Heading>
        <IconButton
          onClick={toggleColorMode}
          aria-label="moon"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        />
      </Container>
    </Box>
  )
}
export default Header
