import styled from "styled-components";

const P1 = styled.p(({ theme }) => ({
  fontFamily: "'Inter', sans-serif",
  fontWeight: "400",
  lineHeight: "1.85",
  letterSpacing: "-0.009em",
  fontSize: "0.9em",
  color: theme.body,
  padding: "0",
  margin: "0",
}));

export default P1;
