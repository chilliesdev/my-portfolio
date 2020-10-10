import styled from '@emotion/styled'

interface Props {
  open: boolean
}

export default styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 25px;
  cursor: pointer;
  background-color: inherit;
  border: none;
  z-index: 2;
  outline: none;

  span:nth-of-type(1) {
    transform: ${({ open }) => (open ? `rotate(45deg)` : `none`)};
    top: ${({ open }) => (open ? `11px` : 0)};
  }

  span:nth-of-type(2) {
    right: ${({ open }) => (open ? `-99rem` : 0)};
  }

  span:nth-of-type(3) {
    transform: ${({ open }) => (open ? `rotate(-45deg)` : `none`)};
    bottom: ${({ open }) => (open ? `11px` : 0)};
  }
`
