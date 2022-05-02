import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300&display=swap');

  * {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
    color: white;
  }

  body {
    background-color: #2f3640;
  }
`;
