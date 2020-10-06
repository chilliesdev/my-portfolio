import React from 'react'

import StyledFeatured from '../styles/StyledFeatured'
import FeaturedWrapper from '../styles/FeaturedWrapper'
import Heading from '../styles/Heading'
import Button from '../styles/Button'
import FeaturedButtonWrapper from '../styles/FeaturedButtonWrapper'
import ArrowButton from './ArrowButton'
import BodyText from '../styles/BodyText'
import useRelativePath from '../hooks/useRelativePath'

interface Props {
  details?: {
    image: string
    heading: string
    body: string
    accentBtn: string
    secondaryBtn: string
    arrowBtn: string
  }
  open: boolean
  onNext: () => void
}

interface Defaults {
  heading: string
  body: string
  accentBtn: string
  arrow: string
}

const defaults: Defaults = {
  heading: 'Hi, I am a Full-Stack Web Developer',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna  aliqua.
      Netus et malesuada fames ac turpis egestas  integer eget aliquet. Cursus euismod quis viverra nibh cras  pulvinar mattis nunc.`,
  accentBtn: 'About Me',
  arrow: 'featured projects'
}

const Featured: React.FC<Props> = ({ details, open, onNext }) => {
  return (
    <StyledFeatured image={details?.image || useRelativePath('home.jpg')} open={open}>
      <FeaturedWrapper open={open}>
        <Heading>{details ? details.heading : defaults.heading}</Heading>
        <BodyText>{details ? details.body : defaults.body}</BodyText>
        <FeaturedButtonWrapper>
          <Button to={details ? details.accentBtn : '/about'} color="accent">
            details
          </Button>
          {details && (
            <Button to="/portfolio" color="secondary">
              all projects
            </Button>
          )}
        </FeaturedButtonWrapper>
        <ArrowButton onClick={onNext}>{details ? details.arrowBtn : defaults.arrow}</ArrowButton>
      </FeaturedWrapper>
    </StyledFeatured>
  )
}

export default Featured
