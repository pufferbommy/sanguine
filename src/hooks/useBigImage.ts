import { useEffect, useRef, useState } from 'react'
import { API_RANDOM_BIG_IMAGE } from '../constants/apiEndpoints'

function useBigImage() {
  const called = useRef(false)
  const [bigImage, setBigImage] = useState('')

  useEffect(() => {
    async function fetchBigImage() {
      try {
        if (called.current) return
        const response = await fetch(API_RANDOM_BIG_IMAGE)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        setBigImage(response.url)
      } catch (error) {
        console.error(error)
      }
    }

    fetchBigImage()

    return () => {
      called.current = true
    }
  }, [])

  return bigImage
}
export default useBigImage
