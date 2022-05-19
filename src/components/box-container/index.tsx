import styled, { css } from 'styled-components'

const BoxContainer = styled.div<{ primary?: boolean }>`
  ${({ theme, primary }) => css`
    padding: 1.5rem 1rem;
    background-color: ${theme.colors.white};
    border-radius: 1rem;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
    font-family: ${theme.font.family};
    text-align: left;

    ${primary
      ? css`
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary};
        `
      : css`
          color: ${theme.colors.titleActive};
          background-color: ${theme.colors.white};
        `}
  `}
`

export default BoxContainer
