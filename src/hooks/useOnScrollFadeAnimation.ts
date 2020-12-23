import React from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'

interface Props {
  ref: React.RefObject<HTMLDivElement | HTMLImageElement>
  threshold: number
  identifier: string
}

const useOnScrollFadeAnimation = (props: Props) => {
  const intersection = useIntersection(props.ref, {
    root: null,
    rootMargin: '0px',
    threshold: props.threshold
  })

  const fadeIn = (element: string) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power.out',
      stagger: {
        amount: 0.3
      }
    })
  }

  const fadeOut = (element: string) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power.out'
    })
  }

  // eslint-disable-next-line no-unused-expressions
  intersection && intersection.intersectionRatio < props.threshold ? fadeOut(props.identifier) : fadeIn(props.identifier)
}

export default useOnScrollFadeAnimation
