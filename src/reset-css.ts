import { css } from 'styled-components'

const resetCSS = css`
  ${({ theme }) => css`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Roboto:wght@400;500;700&display=swap');

    * {
      padding: 0;
      margin: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      line-height: 1.5;
      font-size: 16px;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      color: ${theme.colors.titleActive};
      font-family: ${theme.font.family};
      background-color: ${theme.colors.offWhite};
    }

    p {
      font-size: 1rem;
      font-weight: ${theme.font.weights.regular};
    }

    b,
    strong {
      font-weight: ${theme.font.weights.bold};
    }

    button,
    input,
    select,
    textarea {
      font-size: 1rem;
      font-family: ${theme.font.family};
    }

    h1 {
      font-size: 3rem;
      font-weight: ${theme.font.weights.bold};
    }

    h2 {
      font-size: 2.5rem;
      font-weight: ${theme.font.weights.bold};
    }

    h3 {
      font-size: 2rem;
      font-weight: ${theme.font.weights.bold};
    }

    h4 {
      font-size: 1.5rem;
      font-weight: ${theme.font.weights.bold};
    }

    h5 {
      font-size: 1.25rem;
      font-weight: ${theme.font.weights.bold};
    }

    h6 {
      font-size: 1rem;
      font-weight: ${theme.font.weights.bold};
    }

    img {
      vertical-align: middle;
      border-style: none;
      max-width: 100%;
    }
  `}
`

export default resetCSS
