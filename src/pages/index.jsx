import React from "react";
import styled from "styled-components";
import BaseLayout from "../templates/base";
import H1 from "../components/h1";
import P1 from "../components/p1";

const Text = styled.div(({ theme }) => ({
  color: theme.color,
}))

const Overview = () => (
  <BaseLayout>
    <H1>Hi there.</H1>
    <P1>Start with this.</P1>
  </BaseLayout>
);

export default Overview;
