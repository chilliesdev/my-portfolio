import React from 'react'

import StyledFeatured from '../styles/StyledFeatured'
import FeaturedWrapper from '../styles/FeaturedWrapper'
import FeaturedHeading from '../styles/FeaturedHeading'
import FeaturedBody from '../styles/FeaturedBody'
import Button from '../styles/Button'
import FeaturedButtonWrapper from '../styles/FeaturedButtonWrapper'
import ArrowButton from './ArrowButton'

const Featured: React.FC = () => {
  const defaults: {
    heading: string
    body: string
    accentBtn: string
    arrow: string
  } = {
    heading: 'Hi, I am a Full-Stack Web Developer',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna  aliqua.
      Netus et malesuada fames ac turpis egestas  integer eget aliquet. Cursus euismod quis viverra nibh cras  pulvinar mattis nunc.`,
    accentBtn: 'About Me',
    arrow: 'featured projects'
  }

  return (
    <StyledFeatured>
      <FeaturedWrapper>
        <FeaturedHeading>{defaults.heading}</FeaturedHeading>
        <FeaturedBody>{defaults.body}</FeaturedBody>
        <FeaturedButtonWrapper>
          <Button color="accent">{defaults.accentBtn}</Button>
        </FeaturedButtonWrapper>
        <ArrowButton>{defaults.arrow}</ArrowButton>
      </FeaturedWrapper>
    </StyledFeatured>
  )
}

export default Featured
