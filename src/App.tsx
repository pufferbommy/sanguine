import { Container } from '@chakra-ui/react'
import BigImage from './components/BigImage'
import Header from './components/Header'
import Sounds from './components/Sounds'
import TodayQuote from './components/TodayQuote'

function App() {
  return (
    <>
      <Header />
      <Container display="flex" flexDir="column" mt={3} gap={6} as="main">
        <BigImage />
        <TodayQuote />
        <Sounds />
      </Container>
    </>
  )
}
export default App
