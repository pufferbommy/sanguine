import { Container, Heading, Grid, GridItem } from '@chakra-ui/react'
import Sound from './Sound'

import snowSound from '../assets/snow.mp3'
import snowImg from '../assets/snow.jpg'

function Sounds() {
  return (
    <Container mt={4}>
      <Heading size="lg" mb={2} as="h2">
        Sounds
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {Array.from({ length: 6 }, (_, i) => (
          <GridItem key={i}>
            <Sound name="Snow" cover={snowImg} src={snowSound} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}
export default Sounds
