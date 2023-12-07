// globalStyles.js
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: ${props => props.theme.background.default};
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
