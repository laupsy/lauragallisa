import styled from "styled-components";

const H3 = styled.h3(({ theme }) => ({
  fontFamily: "Metric",
  fontSize: "0.8em",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  fontWeight: "500",
  color: theme.label,
  marginTop: "3em",
}));

export default H3;
