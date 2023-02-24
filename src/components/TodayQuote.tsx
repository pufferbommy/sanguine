import { Box, Container, Heading, Code, Skeleton } from '@chakra-ui/react'
import { useTodayQuote } from '../hooks/useTodayQuote'

function TodayQuote() {
  const todayQuote = useTodayQuote()

  return (
    <Box>
      <Container mt={4}>
        <Heading size="lg" mb={2} as="h2">
          Today Quote
        </Heading>
        {todayQuote ? (
          <Code p={4} rounded="2xl">
            {todayQuote}
          </Code>
        ) : (
          <Skeleton height={20} rounded="2xl" />
        )}
      </Container>
    </Box>
  )
}
export default TodayQuote
