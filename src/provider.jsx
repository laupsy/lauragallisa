import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { Helmet } from "react-helmet";
import AppleTouchIcon from "./assets/apple-touch-icon.png";
import FaviconSmall from "./assets/favicon-16x16.png";
import FaviconMedium from "./assets/favicon-32x32.png";
import * as fonts from "./assets/fonts";

/**
 * Provides access to the Styled Components theme, as well as
 * any other global styles/libraries we want to add later.
 * Provider is used in gatsby-node.js and gatsby-ssr.js
 */
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  src: local("Inter Regular"), 
       url(${fonts.InterRegular}) format("woff"),
       url(${fonts.InterRegular2}) format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  src: local("Inter Bold"), 
       url(${fonts.InterExtraBold}) format("woff"),
       url(${fonts.InterExtraBold2}) format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  src: local("Inter Black"), 
       url(${fonts.InterBlack}) format("woff"),
       url(${fonts.InterBlack2}) format("woff2");
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
  foreground: "hsl(220, 20%, 98%)",
  highlight: "hsl(325, 60%, 50%)",
  label: "hsl(220, 10%, 60%)",
  line: "hsl(220, 10%, 90%)",
  lowlight: "hsl(360, 60%, 56%)",
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
        <title>Laura Gallisá</title>
        <meta name="description" content="Laura Gallisá is a technical design lead and manager with experience designing and developing for web, React, native macOS, and iOS. Laura cares deeply about designing conscientious experiences that are delightfully accessible to everyone. Laura's generative approach starts by identifying the problem that needs to be solved, and then analyzes optimizations and trade-offs of potential solutions before making an opinionated decision on the right solution. Problems are solved in both the interface and in the technical infrastructure, which is why Laura works closely with the engineers on her team to achieve the best possible outcome. Laura has shipped things at awesome places - Fleetsmith, Dropbox, Twitch, Tendigi. Laura received her Bachelor of Science in Computer Science from New York University Tandon School of Engineering." />
      </Helmet>
      <GlobalStyles />
      <Normalize />
      {children}
    </Fragment>
  </ThemeProvider>
);

export default Provider;
