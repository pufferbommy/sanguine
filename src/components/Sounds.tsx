import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { sounds } from '../constants/sounds'
import Sound from './Sound'

function Sounds() {
  return (
    <Container mt={4}>
      <Heading size="lg" mb={2} as="h2">
        Sounds
      </Heading>
      <SimpleGrid columns={[2, null, 3]} gap={4}>
        {sounds.map(({ name, cover, src }) => (
          <Sound key={name} name={name} cover={cover} src={src} />
        ))}
      </SimpleGrid>
    </Container>
  )
}
export default Sounds
