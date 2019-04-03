import React from "react";
import styled from "styled-components";
import Label from "./label";

const StyledTab = styled.button(({ isActive, theme }) => ({
  background: "transparent",
  border: "0",
  borderBottom: isActive ? `1px solid ${theme.title}` : `1px solid transparent`,
  color: isActive ? theme.title : theme.body,
  marginRight: "1.5em",
  outline: "0",
  padding: "0",
  whiteSpace: "nowrap",
  ...(!isActive && {
    ":hover, :focus": {
      borderBottomColor: theme.highlight,
      cursor: "pointer",
    },
  }),
}));

const Tabs = styled.div(({ theme }) => ({
  background: theme.background,
  display: "flex",
  margin: "-1em -3em",
  padding: "3em",
  position: "sticky",
  top: "0",
  zIndex: "1",
}));

const Tab = ({ onClick, isActive, children }) => (
  <StyledTab onClick={onClick} isActive={isActive}>
    <Label isCurrentColor>{children}</Label>
  </StyledTab>
);

export { Tabs, Tab };
