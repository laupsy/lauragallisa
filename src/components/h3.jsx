import styled from "styled-components";

const H3 = styled.h3(({ theme }) => ({
  color: theme.title,
  fontFamily: "'Inter', sans-serif",
  fontSize: "1.25em",
  letterSpacing: "-0.015em",
  fontWeight: "700",
  marginBottom: "1em",
}));

export default H3;
