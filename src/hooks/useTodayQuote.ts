import { useState, useEffect, useRef } from 'react'
import { API_RANDOM_QUOTE } from '../constants/apiEndpoints'

export const useTodayQuote = () => {
  const called = useRef(false)
  const [todayQuote, setTodayQuote] = useState('')

  useEffect(() => {
    async function fetchQuote() {
      try {
        if (called.current) return
        const response = await fetch(API_RANDOM_QUOTE)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setTodayQuote(data.content)
      } catch (error) {
        console.error(error)
      }
    }

    fetchQuote()
    return () => {
      called.current = true
    }
  }, [])

  return todayQuote
}
