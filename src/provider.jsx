import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { Helmet } from "react-helmet";
import AppleTouchIcon from "./assets/apple-touch-icon.png";
import FaviconSmall from "./assets/favicon-16x16.png";
import FaviconMedium from "./assets/favicon-32x32.png";

/**
 * Provides access to the Styled Components theme, as well as
 * any other global styles/libraries we want to add later.
 * Provider is used in gatsby-node.js and gatsby-ssr.js
 */
const GlobalStyles = createGlobalStyle`
@import url('https://rsms.me/inter/inter.css');
@import url('https://fonts.googleapis.com/css?family=Bitter');

@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

html, body {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0
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
  body: "hsl(220, 20%, 25%)",
  fog: "rgba(255,255,255,0.9)",
  foreground: "hsl(220, 20%, 95%)",
  highlight: "hsl(310, 80%, 56%)",
  label: "hsl(220, 10%, 60%)",
  line: "hsl(220, 10%, 90%)",
  lowlight: "hsl(360, 90%, 66%)",
  title: "hsl(220, 20%, 5%)",
};

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="Vlg5epzrR1VxvAivw9l_LE39PO122SYU3sjBqaECGzo"
        />
        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={FaviconMedium} />
        <link rel="icon" type="image/png" sizes="16x16" href={FaviconSmall} />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Laura Gallisá</title>
      </Helmet>
      <GlobalStyles />
      <Normalize />
      {children}
    </Fragment>
  </ThemeProvider>
);

export default Provider;
