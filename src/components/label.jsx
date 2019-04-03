import styled from "styled-components";

const Label = styled.p(({ theme, isCurrentColor }) => ({
  fontFamily: "'Inter', sans-serif",
  fontWeight: "700",
  lineHeight: "1.6",
  fontSize: "0.72em",
  letterSpacing: "0.05em",
  color: isCurrentColor ? "currentColor" : theme.body,
  padding: "0",
  margin: "0",
  textTransform: "uppercase",
}));

export default Label;
