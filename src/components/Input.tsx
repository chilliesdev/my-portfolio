import React from 'react'
import StyledInput from '../styles/StyledInput'
import Label from '../styles/Label'
import InputGroup from '../styles/InputGroup'
import TextArea from '../styles/TextArea'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  children: string
  large?: boolean
}

const Input: React.FC<Props> = ({ children, placeholder, large }) => {
  return (
    <InputGroup>
      <Label>{children}</Label>
      {large ? <TextArea placeholder={placeholder} /> : <StyledInput placeholder={placeholder} />}
    </InputGroup>
  )
}

export default Input
