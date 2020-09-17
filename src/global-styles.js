import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:inherit;
    font-family:'Noto Sans JP'
}

html{
    font-size:62.5%;
}

body{
  box-sizing:border-box;
  font-family: 'Noto Sans JP', sans-serif;
}

::selection{
  color:#fff;
  background-color:${({ theme: { colors } }) => colors.blue['100']}
}

`;

export default GlobalStyle;
