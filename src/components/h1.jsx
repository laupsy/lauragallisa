import styled from "styled-components";

const H1 = styled.h1(({ theme }) => ({
  color: theme.title,
  fontFamily: "'Inter', sans-serif",
  fontSize: "3.1em",
  fontWeight: "700",
  letterSpacing: "-0.01em",
  margin: "0",
  padding: "0",
}));

export default H1;
