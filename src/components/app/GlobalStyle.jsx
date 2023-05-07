import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-style: inherit;
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    object-fit: contain; 
  }

  ul {
    list-style: none;
  }
`;
