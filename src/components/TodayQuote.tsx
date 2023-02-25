import { Container, Heading, Code, Skeleton } from '@chakra-ui/react'
import { useTodayQuote } from '../hooks/useTodayQuote'

function TodayQuote() {
  const todayQuote = useTodayQuote()

  return (
    <Container mt={8}>
      <Heading size="md" mb={4} as="h2">
        Today Quote
      </Heading>
      {!todayQuote ? (
        <Skeleton height={20} rounded="xl" />
      ) : (
        <Code p={4} display="block" rounded="xl">
          {todayQuote}
        </Code>
      )}
    </Container>
  )
}
export default TodayQuote
