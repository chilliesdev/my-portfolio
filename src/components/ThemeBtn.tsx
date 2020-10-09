import React from 'react'

import Icon from '../assets/Light Mode.svg'
import StyledThemeBtn from '../styles/StyledThemeBtn'

const ThemeBtn: React.FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({ onClick }) => (
  <StyledThemeBtn onClick={onClick} src={Icon} />
)

export default ThemeBtn
