import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import StyledFeatured from '../styles/StyledFeatured'
import FeaturedWrapper from '../styles/FeaturedWrapper'
import FeaturedHeading from '../styles/FeaturedHeading'
import FeaturedBody from '../styles/FeaturedBody'
import Button from '../styles/Button'
import FeaturedButtonWrapper from '../styles/FeaturedButtonWrapper'
import ArrowButton from './ArrowButton'

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
  const data: {
    file: {
      id: string
    }
  } = useStaticQuery(graphql`
    query Background {
      file(base: { eq: "home.jpg" }) {
        id
      }
    }
  `)

  return (
    <StyledFeatured image={details.image || data.file.id} open={open}>
      <FeaturedWrapper open={open}>
        <FeaturedHeading>{details ? details.heading : defaults.heading}</FeaturedHeading>
        <FeaturedBody>{details ? details.body : defaults.body}</FeaturedBody>
        <FeaturedButtonWrapper>
          <Button color="accent">{details ? 'details' : defaults.accentBtn}</Button>
          {details && <Button color="secondary">all projects</Button>}
        </FeaturedButtonWrapper>
        <ArrowButton onClick={onNext}>{details ? details.arrowBtn : defaults.arrow}</ArrowButton>
      </FeaturedWrapper>
    </StyledFeatured>
  )
}

export default Featured
