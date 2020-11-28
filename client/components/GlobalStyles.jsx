import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'AdihausDIN',Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    background-color: #fff;
    color: #000;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    overflow-y: scroll;
    padding: 0;
    text-rendering: optimizeLegibility;
    text-transform: none;
  }
`;

export default GlobalStyle;
