import { useState, useEffect } from 'react'

const useScrollHandler = () => {
  const scrollCheck = () => window.scrollY < 10

  const [scroll, setScroll] = useState<boolean>(false)

  useEffect(() => {
    setScroll(scrollCheck())
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScroll(scrollCheck())
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [scroll, setScroll])

  return scroll
}

export default useScrollHandler
