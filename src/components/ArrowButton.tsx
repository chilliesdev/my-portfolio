import React from 'react'

import StyledArrowButton from '../styles/StyledArrowButton'
import ArrowIcon from '../styles/ArrowIcon'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: string
}

const ArrowButton: React.FC<Props> = ({ onClick, children }) => {
  return (
    <StyledArrowButton onClick={onClick}>
      <ArrowIcon />
      {children}
    </StyledArrowButton>
  )
}

export default ArrowButton
