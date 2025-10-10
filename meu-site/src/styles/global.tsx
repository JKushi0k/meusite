import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        background: linear-gradient(to left, #000009 24%, #00066F 77%);
        color: #ffffff;
        font-family: cursive;
        font-size: 24px;
    }
`