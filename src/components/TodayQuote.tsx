import { Box, Container, Heading, Code, Skeleton, Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

function TodayQuote() {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    fetch('https://quotes.rest/qod?language=en')
      .then((res) => res.json())
      .then((quoteOfTheDay) => setQuote(quoteOfTheDay.contents.quotes[0].quote))
      .catch((error) => {
        console.log(error)
        console.log('error fetching quote')
      })
  }, [])

  return (
    <Box>
      <Container mt={4}>
        <Heading size="lg" mb={2} as="h1">
          TDQ
        </Heading>
        {quote ? (
          <Code p={4} rounded="2xl">
            {quote}
          </Code>
        ) : (
          <Skeleton height={20} rounded="2xl" />
        )}
      </Container>
    </Box>
  )
}
export default TodayQuote
