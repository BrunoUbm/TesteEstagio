import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #0e1a24;
    z-index: 0;
  }

  a{
    text-decoration: none;
  }

`;
