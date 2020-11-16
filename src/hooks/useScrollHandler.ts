import { useState, useEffect } from 'react'

const useScrollHandler = () => {
  const [scroll, setScroll] = useState<boolean>(false)

  useEffect(() => {
    setScroll(window.scrollY < 10)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY < 10)
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [scroll, setScroll])

  return scroll
}

export default useScrollHandler
