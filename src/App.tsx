import { Container } from '@chakra-ui/react'
import Header from './components/Header'
import BigImage from './components/BigImage'
import TodayQuote from './components/TodayQuote'
import Sounds from './components/Sounds'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Container display="flex" flexDir="column" mt={3} gap={6} as="main">
        <BigImage />
        <TodayQuote />
        <Sounds />
      </Container>
      <Footer />
    </>
  )
}
export default App
