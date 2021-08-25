import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3 {
    margin: 0;
  }

  :root {
    --primary: #00a8e1;
    --secondary: #f68926;
    --tertiary: #F2FBFE;
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;

    --white: #fff;
    --black: #111317;
    --black10: #000;
    --background: #f2f3f5;

    --title: #2b2f3A;
		--subtitle: #4C5365;
    --text: #4C536580;
  }

  @font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans/OpenSans-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans/OpenSans-Medium.ttf");
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans/OpenSans-Bold.ttf");
    font-style: bold;
    font-weight: 800;
    font-display: swap;
  }
  @font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans/OpenSans-SemiBold.ttf");
    font-weight: 600;
    font-display: swap;
  }
`