import React from "react";
import styled from "styled-components";

const Decor = styled.div(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  width: "0.5em",
  height: "100vh",
  background: theme.highlight,
}));

const Content = styled.div({
  paddingLeft: "0.5em",
});

const BaseLayout = ({ className, children }) => (
  <div>
    <Decor />
    <Content className={className}>{children}</Content>
  </div>
);

export default BaseLayout;
