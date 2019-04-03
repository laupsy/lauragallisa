import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

/**
 * Provides access to the Styled Components theme, as well as
 * any other global styles/libraries we want to add later.
 * Provider is used in gatsby-node.js and gatsby-ssr.js
 */
const GlobalStyles = createGlobalStyle`
@import url('https://rsms.me/inter/inter.css');
@import url('https://fonts.googleapis.com/css?family=Lora');

@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

html {
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
}
`;

const theme = {
  background: "hsl(0, 0%, 100%)",
  foreground: "hsl(220, 20%, 95%)",
  title: "hsl(220, 20%, 5%)",
  label: "hsl(220, 10%, 60%)",
  body: "hsl(220, 20%, 25%)",
  highlight: "hsl(310, 80%, 56%)",
  lowlight: "hsl(360, 90%, 66%)",
  line: "hsl(220, 10%, 90%)",
};

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <Normalize />
      {children}
    </Fragment>
  </ThemeProvider>
);

export default Provider;
