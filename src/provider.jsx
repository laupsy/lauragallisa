import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import fonts from "./fonts";

/**
 * Provides access to the Styled Components theme, as well as
 * any other global styles/libraries we want to add later.
 * Provider is used in gatsby-node.js and gatsby-ssr.js
 */
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Metric";
  font-style: normal;
  font-weight: 400;
  src: local("Metric"), 
       url(${fonts.Metric.regular}) format("woff"),
       url(${fonts.Metric2.regular}) format("woff2");
}
@font-face {
  font-family: "Metric";
  font-style: normal;
  font-weight: 500;
  src: local("Metric Semibold"), 
       url(${fonts.Metric.semibold}) format("woff"),
       url(${fonts.Metric2.semibold}) format("woff2");
}

html {
  box-sizing: border-box;
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
  color: "purple",
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
