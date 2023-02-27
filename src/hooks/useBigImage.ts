import { useEffect, useRef, useState } from 'react'
import { API_RANDOM_BIG_IMAGE } from '../constants/apiEndpoints'

function useBigImage() {
  const called = useRef(false)
  const [bigImage, setBigImage] = useState<any>({})

  useEffect(() => {
    async function fetchBigImage() {
      try {
        if (called.current) return
        const headers = new Headers()
        headers.append('Authorization', 'Client-ID ' + import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY)
        const response = await fetch(
          API_RANDOM_BIG_IMAGE +
            '?' +
            new URLSearchParams({
              orientation: 'landscape',
              query: 'flowers',
            }),
          { headers }
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setBigImage(data)
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
