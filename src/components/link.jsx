import React from "react";
import styled from "styled-components";

const StyledAnchorTag = styled.a(({ theme, isOnDark }) => ({
  textDecoration: "none",
  borderBottom: `1px solid ${isOnDark ? theme.highlight : theme.line}`,
  color: isOnDark ? theme.highlight : theme.body,
  ":hover": {
    color: isOnDark ? theme.background : theme.body,
    borderBottomColor: isOnDark ? theme.background : theme.body,
  },
}));

const Link = ({ href, children, isOnDark, newTab }) => (
  <StyledAnchorTag
    href={href}
    isOnDark={isOnDark}
    target={newTab && "_blank"}
    rel="noopener noreferrer"
  >
    {children}
  </StyledAnchorTag>
);

export default Link;
