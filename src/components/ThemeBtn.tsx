import React, { useContext } from 'react'

import { ThemeContext } from 'styled-components'
import StyledThemeBtn from '../styles/StyledThemeBtn'
import Icon from '../styles/Icon'
import useRelativePath from '../hooks/useRelativePath'

const ThemeBtn: React.FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({ onClick }) => {
  const theme = useContext(ThemeContext)

  return (
    <StyledThemeBtn onClick={onClick}>
      <Icon
        transformValue={theme.name === 'light' && `translateX(-25px)`}
        src={useRelativePath('Light-mode.svg')}
        default
        flex
        removeMargin
      />
      <Icon
        transformValue={theme.name === 'light' && `translateX(-25px)`}
        src={useRelativePath('Night-mode.svg')}
        default
        flex
        removeMargin
      />
    </StyledThemeBtn>
  )
}

export default ThemeBtn
