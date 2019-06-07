import styled from "styled-components";

const Label = styled.p(({ theme, isCurrentColor }) => ({
  color: isCurrentColor ? "currentColor" : theme.body,
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.72em",
  fontWeight: "600",
  letterSpacing: "0.08em",
  lineHeight: "1.6",
  margin: "0",
  padding: "0",
  textTransform: "uppercase",
}));

export default Label;
