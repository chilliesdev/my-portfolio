import styled from 'styled-components'

export default styled.li`
  text-transform: uppercase;
  list-style: none;
  margin: 1rem 1.5rem;
  max-width: fit-content;

  &::before {
    content: '';
    position: relative;
    display: block;
    top: 2.2rem;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.secondary};
    transition: all ease-in-out 500ms;
  }

  &:hover ::before {
    width: 110px;
  }
`
